import React from "react";

import "../assets/devos.css";

const ChatMessage = ({ message, user, color, room, adminColors}) => {
  const msg = message.message;
  const sender = message.sender;
  var textColor = 'black';
  const msgWrapper = sender === user ? "userWrapper" : "otherWrapper";
  const msgClass = sender === user ? "userMessage" : "otherMessage";
  var color = '#ca4e4e';

  for(var key in adminColors) {
    if(key == sender){
      if(adminColors[key]['color']){
        color = adminColors[key]['color'];
      }
    }
  }
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