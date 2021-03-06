import React, { useState, useEffect } from "react";
import EditableLabel from 'react-inline-editing';
import { SketchPicker } from 'react-color';
import axios from "axios";
import constants from "../../constants.js";
import { navigate } from "../js/utils.js";

import "../assets/adminInfo.css";

const API_URL = constants["API_URL"];

const AdminInfo = ({ token, name }) => {
    const [chatColor, setChatColor] = useState("");
    const [chatName, setChatName] = useState("");
    const [chatEmail, setChatEmail] = useState("");
    const [chatPhone, setChatPhone] = useState("");
    const [displayPicker, setDisplayPicker] = useState(false)

    useEffect(() => {

        const getInfo = async () => {
            await axios.get(API_URL + "getAdminInfo", {
                params: { name: name },
                headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json;charset=UTF-8',
                }
            }).then((response) => {
                    setChatName(response.data.name);
                    setChatEmail(response.data.email);
                    setChatPhone(response.data.phone);
                    setChatColor(response.data.color);
                    console.log(chatColor)
                    console.log(response.data.color)
                    console.log(response.data.name)
                })
        }
        getInfo();

        document.documentElement.style.setProperty('--chatColor', chatColor);

    }, [name, token]);

    const handleNameChange = (name) => {
        setChatName(name);
        updateAdmin()
    }

    const handleEmailChange = (email) => {
        setChatEmail(email);
        updateAdmin()
    }

    const handlePhoneChange = (phone) => {
        setChatPhone(phone);
        updateAdmin()
    }

    const handleClick = () => {
        setDisplayPicker(!displayPicker)
        console.log(chatColor)
    };

    const handleClose = () => {
        setDisplayPicker(!displayPicker)
        updateAdmin()
    };

    const updateAdmin = async () => {
        axios.post(API_URL + "updateAdmin", { 
            name: chatName,
            email: chatEmail,
            phone: chatPhone,
            color: chatColor,
          }, { headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json;charset=UTF-8',
          }
        })
    }

    const handleColorChange = (color) => {
        console.log(color.hex)
        setChatColor(color.hex)
        document.documentElement.style.setProperty('--chatColor', chatColor);
    }

    return (
        <div>
            <h2>Your Info</h2>
            <div className={"adminInfo"}>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>&nbsp;Name:&nbsp;</p>
                    <EditableLabel text={chatName}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocusOut={handleNameChange}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Email:&nbsp;</p>
                    <EditableLabel text={chatEmail}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocusOut={handleEmailChange}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Phone:&nbsp;</p>
                    <EditableLabel text={chatPhone}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocusOut={handlePhoneChange}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Color:&nbsp;</p>
                    <div className="color" onClick={handleClick}/>
                    { displayPicker ? <div className="popover">
                    <div className="cover" onClick={ handleClose }/>
                    <SketchPicker color={ chatColor } onChangeComplete={ handleColorChange } />
                    </div> : null }
                </div>                                
            </div>
        </div>
    );
}

export default AdminInfo;