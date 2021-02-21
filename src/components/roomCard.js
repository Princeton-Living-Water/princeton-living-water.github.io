import React from "react";
import { navigate } from "../js/utils.js";
import constants from "../../constants.js";

import "../assets/devos.css";

const RoomCard = ({ room }) => {
  const name = room.name;
  const unread = room.numUnread;

  const clickRoom = () => {
    if (typeof window !== `undefined`) {
      navigate("/chat/?user=" + name, true);
    }
  }

  return (
    <div className={"roomWrapper"}>
      <a onClick={clickRoom} className={unread > 0 ? "unreadChatRoom" : null}>
        {unread > 0 ?
          `${name} (${unread})` :
          name
        }
      </a>
    </div>
  );
}

export default RoomCard;