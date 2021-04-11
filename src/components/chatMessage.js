import React from "react";

import "../assets/chat.css";

const ChatMessage = ({ message, room, admins}) => {
  const msg = message.message;
  const sender = message.sender;
  
  let msgWrapper;
  let msgClass;
  let color;
  let textColor;

  if (room == sender) {
    msgWrapper =  "userWrapper";
    msgClass = "userMessage";
    color = "#EEE";
    textColor = "black";
  }
  else {
    msgWrapper = "otherWrapper";
    msgClass = "otherMessage";
    color = "#ca4e4e";
    if (sender in admins && admins[sender].color) {
      color = admins[sender].color;
    }
    textColor = "white";
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