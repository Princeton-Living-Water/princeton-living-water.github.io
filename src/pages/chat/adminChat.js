import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import AdminMessage from "../../components/adminMessage";
import { adminConnectSocket, disconnectSocket, listenForMessages, sendAdminMessage } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
    sendAdminMessage(msgInput);
    setMsgInput("")
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
        <form className="chatInput" onSubmit={handleSubmit}>
          <input className="chatBar" type="text" placeholder="send message" value={msgInput} onChange={handleInput} required/>
          <button className="chatSubmit" type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </Subpage>
    </Layout>
  );
};

export default AdminChatPage;
