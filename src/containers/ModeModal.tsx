import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import io from 'socket.io-client';
import { FiVideo, FiMic, FiXSquare } from 'react-icons/fi';
import classNames from 'classnames/bind';
import MyForm from '../component/MyForm';
import { RootState } from '../reducers';
import { connectSocket, getCustomerName, getCustomerMode } from '../actions';
import { CN, MODE } from '../constants';
import styles from './App.module.css';
const cx = classNames.bind(styles);

interface ModeModalProps {
  onToggleSelectMode: () => void;
  onToggleConsulting: () => void;
}

function ModeModal({ onToggleSelectMode, onToggleConsulting }: ModeModalProps) {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.customer.nickname);
  const consultant = localStorage.getItem('consultantId');

  const requestConsulting = (e: React.MouseEvent<HTMLButtonElement>) => {
    onToggleSelectMode();
    onToggleConsulting();
    const mode: string = e.currentTarget.value;
    const initailSocket = io(process.env.REACT_APP_API_URL!);
    initailSocket.emit('joinCustomer', nickname, mode, consultant, (message: string) => {
      alert(message);
    });
    dispatch(connectSocket(initailSocket));
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
            return alert('사용할 수 있는 닉네임입니다');
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
        <div>모든 상담 내용은 녹음됩니다.</div>
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
