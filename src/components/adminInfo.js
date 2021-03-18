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
                    const color = response.data.color;
                    if(color && color.match('^#(?:[0-9a-fA-F]{3}){1,2}$')) {
                        setChatColor(response.data.color);
                        document.documentElement.style.setProperty('--chatColor', response.data.color);
                    } else {
                        document.documentElement.style.setProperty('--chatColor', '#ca4e4e');
                    }
                })
        }
        getInfo();

    }, [name, token]);

    const handleNameChange = (e) => {
        setChatName(e.target.value);
        if (e.type == 'blur') {
            updateAdmin()
        }
    }

    const handleEmailChange = (e) => {
        setChatEmail(e.target.value);
        if (e.type == 'blur') {
            updateAdmin()
        }
    }

    const handlePhoneChange = (e) => {
        setChatPhone(e.target.value);
        if (e.type == 'blur') {
            updateAdmin()
        }
    }

    const handleClick = () => {
        setDisplayPicker(!displayPicker)
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
        document.documentElement.style.setProperty('--chatColor', color.hex);
    }

    return (
        <div>
            <h2>Your Info</h2>
            <div className={"adminInfo"}>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>&nbsp;Name:&nbsp;</p>
                    <input type="text" className="myInputClass" 
                        value={chatName} onChange={handleNameChange} onBlur={handleNameChange}></input>
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Email:&nbsp;</p>
                    <input type="text" className="myInputClass" 
                        value={chatEmail} onChange={handleEmailChange} onBlur={handleEmailChange}></input>
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Phone:&nbsp;</p>
                    <input type="text" className="myInputClass" 
                        value={chatPhone} onChange={handlePhoneChange} onBlur={handlePhoneChange}></input>
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