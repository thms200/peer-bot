import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMic, FiXSquare } from 'react-icons/fi';
import classNames from 'classnames/bind';
import { RootState } from '../reducers';
import { initailCustomer, initialSocket, setRequet, initialStreamPeer } from '../actions';
import styles from './App.module.css';
const cx = classNames.bind(styles);

interface ConsultingProps {
  onToggleConsulting: () => void;
}

function ConsultingModal({ onToggleConsulting }: ConsultingProps) {
  const dispatch = useDispatch();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const nickname = useSelector((state: RootState) => state.customer.nickname);
  const mode = useSelector((state: RootState) => state.customer.mode);
  const customerStream = useSelector((state: RootState) => state.stream.customerStream);
  const consultantStream = useSelector((state: RootState) => state.stream.consultantStream);
  const peer = useSelector((state: RootState) => state.stream.peer);
  const consultantName = localStorage.getItem('consultantName');
  const isVoice = mode === 'Voice';

  const consultant = useRef<HTMLVideoElement | null>(null);
  const customer = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (consultant.current) consultant.current!.srcObject = consultantStream;
  }, [consultantStream]);

  useEffect(() => {
    if (customer.current) customer.current!.srcObject = customerStream;
  }, [customerStream]);

  const disconnectServer = () => {
    onToggleConsulting();
    const consultant = localStorage.getItem('consultantId');
    socket!.emit('leaveCustomer', nickname, consultant, (message: string) => {
      alert(message);
      socket!.disconnect();
      if (peer) peer!.destroy();
      dispatch(initailCustomer());
      dispatch(initialStreamPeer());
      dispatch(initialSocket());
      dispatch(setRequet(false));
    });
  };

  return (
    <div className={styles.consultingWrapper}>
      <button onClick={disconnectServer} className={styles.consultingClose}>
        <FiXSquare size={20} color={'white'} />
      </button>
      <section className={styles.screenWrapper}>
        <div className={styles.text}>{`${consultantName}님`}</div>
        <div className={styles.videoWrapper}>
          {isVoice && <FiMic size={150} color={'rgb(79, 91, 255)'} />}
          <video
            playsInline autoPlay
            ref={consultant}
            className={cx({ voiceMode: isVoice, cameraMode: !isVoice })}>
          </video>
        </div>
        <div className={styles.text}>{`${nickname}님`}</div>
        <div className={styles.videoWrapper}>
          {isVoice && <FiMic size={150} color={'rgb(79, 91, 255)'} />}
          <video
            playsInline autoPlay
            ref={customer}
            className={cx({ voiceMode: isVoice, cameraMode: !isVoice })}>
          </video>
        </div>
      </section>
    </div>
  );
}

export default ConsultingModal;
