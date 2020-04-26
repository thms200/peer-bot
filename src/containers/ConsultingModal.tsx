import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMic, FiXSquare } from 'react-icons/fi';
import classNames from 'classnames/bind';
import { RootState } from '../reducers';
import { initailCustomer, initialSocket } from '../actions';
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
  const consultantName = localStorage.getItem('consultantName');
  const isVoice = mode === 'Voice';

  const consultant = useRef<HTMLVideoElement | null>(null);
  const customer = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const cameraPermission = isVoice ? false : true;
    navigator.mediaDevices
      .getUserMedia({ video: cameraPermission, audio: true })
      .then((stream: any) => {
        if (customer) customer.current!.srcObject = stream;
      });
  }, []);

  const disconnectServer = () => {
    onToggleConsulting();
    const consultant = localStorage.getItem('consultantId');
    socket!.emit('leaveCustomer', nickname, consultant, (message: string) => {
      alert(message);
      dispatch(initailCustomer());
      socket!.disconnect();
      dispatch(initialSocket());
    });
  };

  return (
    <div className={styles.consultingWrapper}>
      <button onClick={disconnectServer} className={styles.consultingClose}>
        <FiXSquare size={20} color={'white'} />
      </button>
      <section className={styles.screenWrapper}>
        <div className={styles.name}>{`${consultantName}님`}</div>
        <div className={styles.videoWrapper}>
          {isVoice && <FiMic size={150} color={'rgb(79, 91, 255)'} />}
          <video
            playsInline muted autoPlay
            ref={consultant}
            className={cx({ voiceMode: isVoice, cameraMode: !isVoice })}>
          </video>
        </div>
        <div className={styles.name}>{`${nickname}님`}</div>
        <div className={styles.videoWrapper}>
          {isVoice && <FiMic size={150} color={'rgb(79, 91, 255)'} />}
          <video
            playsInline muted autoPlay
            ref={customer}
            className={cx({ voiceMode: isVoice, cameraMode: !isVoice })}>
          </video>
        </div>
      </section>
    </div>
  );
}

export default ConsultingModal;
