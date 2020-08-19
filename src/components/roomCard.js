import React from "react";

import "../assets/devos.css";

const RoomCard = ({ room }) => {
  const clickRoom = () => {
    var newWindow = window.open();
    newWindow.document.location.href = "https://princetonlivingwater.org/chat/adminChat?user=" + room;
  }

  return (
    <div className={"roomWrapper"}>
      <a onClick={clickRoom}>
        {room}
      </a>
    </div>
  );
}

export default RoomCard;