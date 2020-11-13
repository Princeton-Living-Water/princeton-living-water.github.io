import React from "react";

import "../assets/devos.css";

const ChatMessage = ({ message, user }) => {
  const msg = message.message;
  const sender = message.sender;

  const msgWrapper = sender === user ? "userWrapper" : "otherWrapper";
  const msgClass = sender === user ? "userMessage" : "otherMessage";
  return (
    <div className={msgWrapper}>
      <div className={msgClass}>
        {msg}
      </div>
    </div>
  );
}

export default ChatMessage;