import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import ModeModal from './ModeModal';
import ChatButton from '../component/ChatButton';
import { RootState } from '../reducers';
import { initailCustomer, initialSocket } from '../actions';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const nickname = useSelector((state: RootState) => state.customer.nickname);
  const [isShowModeSelect, setIsShowModeSelect] = useState<boolean>(true);
  const [isShowConsulting, setIsShowConsulting] = useState<boolean>(true);

  const toggleSelectMode = () => setIsShowModeSelect(!isShowModeSelect);
  const toggleConsulting = () => setIsShowConsulting(!isShowConsulting);

  const disconnectServer = () => {
    toggleConsulting();
    const consultant = localStorage.getItem('consultant');
    socket!.emit('disconnection', nickname, consultant, (message: string) => {
      alert(message);
    });
    dispatch(initailCustomer());
    socket!.disconnect();
    dispatch(initialSocket());
  };

  return (
    <Fragment>
      {!isShowConsulting && <div className={styles.consultingWrapper}>
        <button onClick={disconnectServer} className={styles.closeButton}>
          <FiXSquare size={20} color={'white'} />
        </button>
      </div>}

      {!isShowModeSelect &&
        <ModeModal
          onToggleSelectMode={toggleSelectMode}
          onToggleConsulting={toggleConsulting}
        />
      }
      <ChatButton onClick={toggleSelectMode} />
    </Fragment>
  );
}

export default App;
