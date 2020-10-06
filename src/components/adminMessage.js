import React from "react";

import "../assets/devos.css";

const AdminMessage = ({ message }) => {
  const msg = message.message;
  const sender = message.sender;

  const msgClass = sender === "admin" ? "userMessage" : "otherMessage";
  return (
    <div className={"messageWrapper " + msgClass}>
      {msg}
    </div>
  );
}

export default AdminMessage;