import React, { Fragment, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './App.module.css';
import { FiVideo, FiMic, FiXSquare } from 'react-icons/fi';
import ChatButton from './component/ChatButton';
import MyForm from './component/MyForm';
const cx = classNames.bind(styles);

function App() {
  const [isShowModeSelect, setIsShowModeSelect] = useState<Boolean>(true);

  const showSelectMode = () => setIsShowModeSelect(!isShowModeSelect);
  const onSubmit = async(form: { nickname: string; email: string }) => {
    const { nickname, email } = form;
    const cunsultant = localStorage.getItem('consultant');
    const payload = { nickname, email, cunsultant };

    try{
      return await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/customers`,
        headers: { 'Content-Type': 'application/json' },
        data: payload
      })
        .then(async(res) => {
          const { data: { result } } = res;
          if (result === 'ok') return alert('사용할 수 있는 닉네임입니다');
        });
    } catch(err) {
      alert(err.response.data.errMessage);
    }
  };

  return (
    <Fragment>
      <div className={styles.consultingScreenWrapper}></div>

      <div className={cx({ showModeSelect: isShowModeSelect, modeSelectWrapper: !isShowModeSelect })}>
        <button onClick={showSelectMode} className={styles.closeButton}>
          <FiXSquare size={20} color={'white'} />
        </button>
        <header className={cx('modeRow', 'modeModalHeader')}>
          <div>상담 품질 향상을 위해,</div>
          <div>모든 상담 내용은 녹음됩니다.</div>
        </header>
        <section className={cx('modeRow', 'modeModalSection')}>
          <MyForm onSubmit={onSubmit} />
        </section>
        <footer className={cx('modeRow', 'modeModalFooter')}>
          <div>
            <FiVideo />
            <button>Camera</button>
          </div>
          <div>
            <FiMic />
            <button>Voice</button>
          </div>
        </footer>
      </div>

      <ChatButton onClick={showSelectMode} />
    </Fragment>
  );
}

export default App;
