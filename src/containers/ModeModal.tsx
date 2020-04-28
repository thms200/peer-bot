import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import { FiVideo, FiMic, FiXSquare } from 'react-icons/fi';
import classNames from 'classnames/bind';
import MyForm from '../component/MyForm';
import { RootState } from '../reducers';
import {
  connectSocket,
  getCustomerName,
  getCustomerMode,
  setRequet,
  connectCustomerStream,
  connectConsultantStream,
  getPeer,
} from '../actions';
import { CN, MODE, ALERT } from '../constants';
import styles from './App.module.css';
const cx = classNames.bind(styles);

interface ModeModalProps {
  onToggleSelectMode: () => void;
  onToggleConsulting: () => void;
}

function ModeModal({ onToggleSelectMode, onToggleConsulting }: ModeModalProps) {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.customer.nickname);
  const isRequest = useSelector((state: RootState) => state.customer.isRequest);
  const consultant = localStorage.getItem('consultantId');
  let isFirstSignal = true;

  const requestConsulting = async(e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isRequest) return alert(ALERT.INVALID_NICKNAME);
    const mode: string = e.currentTarget.value;
    const isVoice = mode === 'Voice';
    let customerStream: MediaStream;
    try {
      customerStream = await navigator.mediaDevices.getUserMedia({ video: !isVoice, audio: true });
    } catch(err) {
      alert(ALERT.REQUEST_PERMISSION);
    }
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: customerStream!,
    });

    const initialSocket = io(process.env.REACT_APP_API_URL!);
    peer.on('signal', data => {
      initialSocket.emit('joinCustomer', { nickname, mode, consultant, signal: data }, (message: string) => {
        if (isFirstSignal) alert(message);
        isFirstSignal = false;
      });
    });
    peer.on('stream', stream => {
      dispatch(connectConsultantStream(stream));
    });
    initialSocket.on('acceptConsultant', (signal: any) => {
      peer.signal(signal);
    });
    onToggleSelectMode();
    onToggleConsulting();
    dispatch(connectSocket(initialSocket));
    dispatch(connectCustomerStream(customerStream!));
    dispatch(getPeer(peer));
    dispatch(getCustomerMode(mode));
  };

  const onSubmit = async(form: { nickname: string; email: string }) => {
    const { nickname, email } = form;
    const payload = { nickname, email, consultant };

    try{
      return await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL_CUSTOMER}`,
        headers: { 'Content-Type': 'application/json' },
        data: payload
      })
        .then(async(res) => {
          const { data: { result } } = res;
          if (result === 'ok') {
            dispatch(getCustomerName(nickname));
            dispatch(setRequet(true));
            return alert(ALERT.VALID_NICKNAME);
          }
        });
    } catch(err) {
      alert(err.response.data.errMessage);
    }
  };

  return (
    <div className={styles.modeSelectWrapper}>
      <button onClick={onToggleSelectMode} className={styles.closeButton}>
        <FiXSquare size={20} color={'white'} />
      </button>
      <header className={cx(CN.MODEROW, CN.MODE_HEADER)}>
        <div>상담 품질 향상을 위해,</div>
        <div>모든 상담 내용은 녹음(or 녹화)됩니다.</div>
      </header>
      <section className={cx(CN.MODEROW, CN.MODE_SECTION)}>
        <MyForm onSubmit={onSubmit} />
      </section>
      <footer className={cx(CN.MODEROW, CN.MODE_FOOTER)}>
        <div>
          <FiVideo />
          <button onClick={requestConsulting} value={MODE.CAMERA}>
            {MODE.CAMERA}
          </button>
        </div>
        <div>
          <FiMic />
          <button onClick={requestConsulting} value={MODE.VOICE}>
            {MODE.VOICE}
          </button>
        </div>
      </footer>
    </div>
  );
}

export default ModeModal;
