import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { RootState } from '../reducers';
import { initailCustomer, initialSocket } from '../actions';
import styles from './App.module.css';

interface ConsultingProps {
  onToggleConsulting: () => void;
}

function ConsultingModal({ onToggleConsulting }: ConsultingProps) {
  const dispatch = useDispatch();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const nickname = useSelector((state: RootState) => state.customer.nickname);

  const disconnectServer = () => {
    onToggleConsulting();
    const consultant = localStorage.getItem('consultant');
    socket!.emit('disconnecCustomer', nickname, consultant, (message: string) => {
      alert(message);
      dispatch(initailCustomer());
      socket!.disconnect();
      dispatch(initialSocket());
    });
  };

  return (
    <div className={styles.consultingWrapper}>
      <button onClick={disconnectServer} className={styles.closeButton}>
        <FiXSquare size={20} color={'white'} />
      </button>
    </div>
  );
}

export default ConsultingModal;
