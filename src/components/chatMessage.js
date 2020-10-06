import React from "react";

import "../assets/devos.css";

const ChatMessage = ({ message }) => {
  const msg = message.message;
  const sender = message.sender;

  const msgClass = sender === "admin" ? "otherMessage" : "userMessage";
  return (
    <div className={"messageWrapper " + msgClass}>
      {msg}
    </div>
  );
}

export default ChatMessage;