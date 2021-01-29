import React from "react";
import { navigate } from "../js/utils.js";
import constants from "../../constants.js";

import "../assets/devos.css";

const RoomCard = ({ room }) => {
  const clickRoom = () => {
    if (typeof window !== `undefined`) {
      navigate("/chat/?user=" + room, true);
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