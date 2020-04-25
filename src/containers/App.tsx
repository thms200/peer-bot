import React, { Fragment, useState } from 'react';
import ModeModal from './ModeModal';
import ConsultingModal from './ConsultingModal';
import ChatButton from '../component/ChatButton';

function App() {
  const [isShowModeSelect, setIsShowModeSelect] = useState<boolean>(true);
  const [isShowConsulting, setIsShowConsulting] = useState<boolean>(true);

  const toggleSelectMode = () => setIsShowModeSelect(!isShowModeSelect);
  const toggleConsulting = () => setIsShowConsulting(!isShowConsulting);

  return (
    <Fragment>
      {!isShowConsulting &&
        <ConsultingModal
          onToggleConsulting={toggleConsulting}
        />
      }

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
