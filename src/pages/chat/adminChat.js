import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import AdminMessage from "../../components/adminMessage";
import { adminConnectSocket, disconnectSocket, listenForMessages, sendAdminMessage } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'

import "../../assets/styles.css";
import "../../assets/chat.css";
import constants from '../../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];
const API_URL = constants["API_URL"];

const AdminChatPage = ({ location }) => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [chatUser, setChatUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const chatBarRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const chatUser = urlParams.get('user');

      const {name, token} = cookies;
      if (!name || !token) {
        window.location.replace("/chat/login")
        return;
      }
      adminConnectSocket({ name, token, chatUser, setMessages, setNumMessages });
      listenForMessages(updateMessages);
      setChatUser(chatUser);
      
      return () => disconnectSocket();
    }
  }, []);

  const updateMessages = (data) => {
    setMessages(messages => messages.concat(data))
  }

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(msgInput != '') {
      sendAdminMessage(msgInput);
      setMsgInput("")
    }
  }

  const handleScroll = (event) => {
    if(event > 100) {
      chatBarRef.current.style["overflowY"] = "scroll"
    } else {
      chatBarRef.current.style["overflowY"] = "hidden"
    }
  }

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
        e.preventDefault();
        handleSubmit(e)
    }
  }

  return (
    <Layout>
      <SEO title="Admin Chat" />
      <Subpage>
        <h2>Chat with {chatUser}</h2>
        <div className="messagesWrapper">
          {messages.map((msg, index) => (
            <AdminMessage message={msg} key={index}/>
          ))}
        </div>
        <form ref={formRef} className="chatInput" onSubmit={handleSubmit}>
          <TextareaAutosize onKeyDown={onEnterPress} ref={chatBarRef} onHeightChange={handleScroll} className="chatBar" maxRows="6" type="text" placeholder="send message" value={msgInput} onChange={handleInput} required/>
          <button className="chatSubmit" type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </Subpage>
    </Layout>
  );
};

export default AdminChatPage;
