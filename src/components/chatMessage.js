import React from "react";
import Tooltip from "./tooltip";

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
  let tooltipDirection;

  if (room == sender) {
    msgWrapper =  "user-wrapper";
    msgClass = "user-message tooltip-wrapper";
    color = "#EEE";
    textColor = "black";
    tooltipDirection = "left";
  }
  else {
    msgWrapper = "other-wrapper";
    msgClass = "other-message tooltip-wrapper";
    color = "#ca4e4e";
    if (sender in admins && admins[sender].color) {
      color = admins[sender].color;
    }
    textColor = "white";
    tooltipDirection = "right";
  }

  return (
    <div className={msgWrapper}>
      <div className={msgClass} style={{backgroundColor: color, color: textColor}}>
        {msg}
        <Tooltip direction={tooltipDirection} type={"message"}>
          {`${sender}\n${time}`}
        </Tooltip>
      </div>
    </div>
  );
}

export default ChatMessage;