import React from "react";

import { getTime } from "../js/utils.js";

import "../assets/chat.css";

const ChatMessage = ({ message, room, admins}) => {
  const msg = message.message;
  const sender = message.sender;
  const time = getTime(message.timestamp);
  
  let msgWrapper;
  let msgClass;
  let color;
  let textColor;
  let tooltipStyle;

  if (room == sender) {
    msgWrapper =  "userWrapper";
    msgClass = "userMessage";
    color = "#EEE";
    textColor = "black";
    tooltipStyle = {
      right: "105%",
    }
  }
  else {
    msgWrapper = "otherWrapper";
    msgClass = "otherMessage";
    color = "#ca4e4e";
    if (sender in admins && admins[sender].color) {
      color = admins[sender].color;
    }
    textColor = "white";
    tooltipStyle = {
      left: "105%",
    }
  }

  return (
    <div className={msgWrapper}>
      <div className={msgClass} style={{backgroundColor: color, color: textColor}}>
        {msg}
        <div className="tooltip" style={tooltipStyle}>
          {`${sender}\n${time}`}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;