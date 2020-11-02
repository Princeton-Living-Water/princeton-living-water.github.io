import React from "react";
import { navigate } from "gatsby";
import constants from '../../constants.js';
import "../assets/devos.css";

const URL = constants["URL"];

const RoomCard = ({ room }) => {
  const clickRoom = () => {
    if (typeof window !== `undefined`) {
      var newWindow = window.open();
      newWindow.document.location.href = URL + "/chat/adminChat?user=" + room;
    }
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