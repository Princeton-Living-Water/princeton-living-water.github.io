import React from "react";

import "../assets/devos.css";

const AdminMessage = ({ message }) => {
  const msg = message.message;
  const sender = message.sender;

  const msgWrapper = sender === "admin" ? "userWrapper" : "otherWrapper";
  const msgClass = sender === "admin" ? "userMessage" : "otherMessage";
  return (
    <div className={msgWrapper}>
      <div className={msgClass}>
        {msg}
      </div>
    </div>
  );
}

export default AdminMessage;