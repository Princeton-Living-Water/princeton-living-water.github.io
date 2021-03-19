import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import axios from "axios";
import constants from "../../constants.js";
import { useCookies } from "react-cookie";

import "../assets/adminInfo.css";

const SERVER_URL = constants["SERVER_URL"];

const AdminInfo = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [chatColor, setChatColor] = useState("");
  const [chatName, setChatName] = useState("");
  const [chatEmail, setChatEmail] = useState("");
  const [chatPhone, setChatPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [displayPicker, setDisplayPicker] = useState(false);

  const fetchInfo = async () => {
    const {name, token} = cookies;
    const resp = await axios.get(SERVER_URL + "getAdminInfo", {
      params: { name },
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    setChatName(resp.data.name);
    setChatEmail(resp.data.email);
    setChatPhone(resp.data.phone);
    const color = resp.data.color;
    if (color && color.match("^#(?:[0-9a-fA-F]{3}){1,2}$")) {
      setChatColor(resp.data.color);
      document.documentElement.style.setProperty("--chatColor", resp.data.color);
    } else {
      document.documentElement.style.setProperty("--chatColor", "#ca4e4e");
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleNameChange = e => {
    setChatName(e.target.value);
    if (e.type == "blur") {
      updateAdmin();
    }
  };

  const handleEmailChange = e => {
    setChatEmail(e.target.value);
    if (e.type == "blur") {
      updateAdmin();
    }
  };

  const handlePhoneChange = e => {
    setChatPhone(e.target.value);
    if (e.type == "blur") {
      updateAdmin();
    }
  };

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(!displayPicker);
    updateAdmin();
  };

  const updateAdmin = async () => {
    const {name, token} = cookies;
    const resp = await axios.post(
      SERVER_URL + "updateAdmin",
      {
        name: name,
        new_name: chatName,
        email: chatEmail,
        phone: chatPhone,
        color: chatColor,
      },
      {
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );

    if (resp.data.status != "success") {
      fetchInfo();
      setErrorMessage("Update failed");
    }
    else {
      const new_name = resp.data.name;
      if (new_name != name) {
        setCookies("name", new_name, { path: "/chat" });
        setCookies("token", resp.data.token, { path: "/chat" });
      }
      setErrorMessage("");
    }
  };

  const handleColorChange = color => {
    setChatColor(color.hex);
    document.documentElement.style.setProperty("--chatColor", color.hex);
  };

  return (
    <div>
      <h2>Your Info</h2>
      <div className={"adminInfo"}>
        <div className={"infoRow"}>
          <p className={"infoCategory"}>&nbsp;Name:&nbsp;</p>
          <input
            type="text"
            className="myInputClass"
            value={chatName}
            onChange={handleNameChange}
            onBlur={handleNameChange}
          ></input>
        </div>
        <div className={"infoRow"}>
          <p className={"infoCategory"}>Email:&nbsp;</p>
          <input
            type="text"
            className="myInputClass"
            value={chatEmail}
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
          ></input>
        </div>
        <div className={"infoRow"}>
          <p className={"infoCategory"}>Phone:&nbsp;</p>
          <input
            type="text"
            className="myInputClass"
            value={chatPhone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneChange}
          ></input>
        </div>
        <div className={"infoRow"}>
          <p className={"infoCategory"}>Color:&nbsp;</p>
          <div className="color" onClick={handleClick} />
          {displayPicker ? (
            <div className="popover">
              <div className="cover" onClick={handleClose} />
              <SketchPicker color={chatColor} onChangeComplete={handleColorChange} />
            </div>
          ) : null}
        </div>
        {errorMessage &&
          <div className="error-message">{errorMessage}</div>
        }
      </div>
    </div>
  );
};

export default AdminInfo;
