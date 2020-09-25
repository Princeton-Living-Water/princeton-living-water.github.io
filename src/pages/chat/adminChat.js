import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { adminConnectSocket, disconnectSocket, listenForMessages, sendAdminMessage } from "../../js/socket.js";

import "../../assets/styles.css";
import constants from '../../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];
const API_URL = constants["API_URL"];

const AdminChatPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [chatUser, setChatUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const chatUser = urlParams.get('user');

    const {name, token} = cookies;
    if (!name || !token) {
      window.location.replace("/chat/login")
      return;
    }
    
    adminConnectSocket({ name, token, chatUser, setMessages, setNumMessages });
    setChatUser(chatUser);
    
    return () => disconnectSocket();
  }, []);

  useEffect(() => {
    listenForMessages(messages, setMessages);
  }, [messages]);

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    sendAdminMessage(msgInput);
  }

  return (
    <Layout>
      <SEO title="Admin Chat" />
      <Subpage>
        <h2>{chatUser}</h2>
        <div className="messagesWrapper">
          {messages.map((msg, index) => (
            <ChatMessage message={msg} key={index}/>
          ))}
        </div>
        <form onSubmit={handleSubmit} onChange={handleInput}>
          <input type="text" value={msgInput}></input>
          <input type="submit" value="send"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default AdminChatPage;
