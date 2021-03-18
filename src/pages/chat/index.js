import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { navigate } from "../../js/utils.js";
import { logout, roomPage } from "../../js/chat.js";
import { connectSocket, disconnectSocket, listenForMessages, sendMessage, oldMessages } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'
import axios from "axios";
import constants from "../../../constants.js";

import "../../assets/styles.css";
import "../../assets/chat.css";

const API_URL = constants["API_URL"];

const ChatPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [title, setTitle] = useState("");
  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState("");
  const [isAdmin, setIsAdmin] = useState();
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactColor, setContactColor] = useState("#EEE");
  const [room, setRoom] = useState("");

  const chatBarRef = useRef(null);
  const formRef = useRef(null);
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const { name, token } = cookies;
    if (!name || !token)
      navigate("/chat/login");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const room = urlParams.get("user") || name;

    connectSocket({
      name, 
      token, 
      room, 
      setMessagesScrollBot, 
      setMessagesScrollTop,
      setContactName,
      setContactPhone,
      setContactEmail,
      setContactColor
    });
    listenForMessages(updateMessages);

    setRoom(room);

    const isAdmin = room === name ? false : true;
    setIsAdmin(isAdmin);
    const title = isAdmin ? `Chat with ${room}` : name;
    setTitle(title);
    
    return () => disconnectSocket();
  }, []);

  const setMessagesScrollBot = (data) => {
    setMessages(messages => messages.concat(data));
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  }

  const setMessagesScrollTop = (data) => {
    const box = document.getElementById("messagesBox");
    const oldHeight = box.scrollHeight;

    setMessages(messages => data.concat(messages));
    box.scrollTop = box.scrollHeight - oldHeight;
  }

  const updateMessages = (data) => {
    const box = document.getElementById("messagesBox");
    if (box.scrollTop >= (box.scrollHeight - box.offsetHeight)) {
      setMessagesScrollBot(data);
    }
    else {
      setMessages(messages => messages.concat(data));
    }
  }

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msgInput.trim() !== "") {
      sendMessage(msgInput.trim());
      setMsgInput("")
    }
  }

  const handleScroll = (event) => {
    if (event > 100) {
      chatBarRef.current.style["overflowY"] = "scroll"
    } else {
      chatBarRef.current.style["overflowY"] = "hidden"
    }
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit(e)
    }
  }

  const handleLogout = () => {
    logout(setCookies);
  }
  const handleRoomPage = () => {
    roomPage(setCookies);
  }

  const handleGetOldMessages = (e) => {
    if (e.target.scrollTop === 0) {
      oldMessages(5); // get 5 past messages
    }
  }

  return (
    <Layout>
      <SEO title="Chat" />
      <Subpage>
        <h2>{title}</h2>
        {isAdmin ? <p><a onClick={handleRoomPage}>Back to all rooms</a></p> :
        <div>
          <div className="logoutWrapper">
            <span>Logged in as {cookies.name}</span>
            <span>Not you? <a onClick={handleLogout}>Logout</a></span>
          </div>
          <div className="infoWrapper">
            <span>Chatting with: {contactName} ({contactEmail})</span> 
          </div>
        </div>
        }
        <div ref={messagesRef} onScroll={handleGetOldMessages} className="messagesWrapper" id="messagesBox">
          {messages.map((msg, index) => (
            <ChatMessage message={msg} user={cookies.name} color={contactColor} room={room} key={index}/>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form ref={formRef} className="chatInput" onSubmit={handleSubmit}>
          <TextareaAutosize onKeyDown={onEnterPress} ref={chatBarRef} onHeightChange={handleScroll} className="chatBar" maxRows="6" type="text" placeholder="send message" value={msgInput} onChange={handleInput} required/>
          <button className="chatSubmit" type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatPage;
