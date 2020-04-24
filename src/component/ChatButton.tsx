import React from 'react';
import styles from '../App.module.css';

interface BotProps {
  onClick: () => void;
}

function ChatButton({ onClick }: BotProps) {
  return (
    <button onClick={onClick} className={styles.chatbot}>
      <img
        src="https://img.icons8.com/nolan/96/chat.png"
        alt="chatBot"
      />
    </button>
  );
}

export default ChatButton;
