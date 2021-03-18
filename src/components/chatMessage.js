import React from "react";

import "../assets/devos.css";

const ChatMessage = ({ message, user, color, room }) => {
  const msg = message.message;
  const sender = message.sender;
  var textColor = 'black';
  const msgWrapper = sender === user ? "userWrapper" : "otherWrapper";
  const msgClass = sender === user ? "userMessage" : "otherMessage";

  if(room == sender) {
    color = "#EEE";
  } else {
    textColor = 'white';
  }

  return (
    <div className={msgWrapper}>
      <div className={msgClass} style={{backgroundColor: color, color: textColor}}>
        {msg}
      </div>
    </div>
  );
}

export default ChatMessage;