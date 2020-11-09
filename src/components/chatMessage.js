import React from "react";

import "../assets/devos.css";

const ChatMessage = ({ message }) => {
  const msg = message.message;
  const sender = message.sender;

  const msgWrapper = sender === "admin" ? "otherWrapper" : "userWrapper";
  const msgClass = sender === "admin" ? "otherMessage" : "userMessage";
  return (
    <div className={msgWrapper}>
      <div className={msgClass}>
        {msg}
      </div>
    </div>
  );
}

export default ChatMessage;