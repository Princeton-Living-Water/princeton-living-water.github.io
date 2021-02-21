import React from "react";
import EditableLabel from 'react-inline-editing';

import "../assets/adminInfo.css";

const AdminInfo = ({ name, email, phone, color }) => {

    const chatColor = color;

    const _handleFocus = (text) => {
        console.log('Focused with text: ' + text);
    }

    const _handleFocusOut = (text) => {
        console.log('Left editor with text: ' + text);
    }

    const _handleChange = (text) => {
        console.log('ASDF: ' + text);
    }

    document.documentElement.style.setProperty('--chatColor', chatColor);

    return (
        <div>
            <h2>Your Info</h2>
            <div className={"adminInfo"}>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>&nbsp;Name:&nbsp;</p>
                    <EditableLabel text={name}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocus={_handleFocus}
                        onFocusOut={_handleFocusOut}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Email:&nbsp;</p>
                    <EditableLabel text={email}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocus={_handleFocus}
                        onFocusOut={_handleFocusOut}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Phone:&nbsp;</p>
                    <EditableLabel text={phone}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        onFocus={_handleFocus}
                        onFocusOut={_handleFocusOut}
                    />
                </div>
                <div className={"infoRow"}>
                    <p className={"infoCategory"}>Color:&nbsp;</p>
                    <input className="colorPicker" type="color" value={chatColor} 
                        onChange={_handleChange()} onBlur={_handleFocusOut(chatColor)}></input>
                    <EditableLabel text={color}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass colorInput'
                        onFocus={_handleFocus}
                        onFocusOut={_handleFocusOut}
                    />
                </div>                                
            </div>
        </div>
    );
}

export default AdminInfo;