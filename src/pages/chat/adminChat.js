import React, { useState, useEffect } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { getCookies } from "../../js/cookies.js";
import { adminConnectSocket } from "../../js/socket.js";

import "../../assets/styles.css";

const AdminChatPage = () => {
  const [header, setHeader] = useState("");
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const chatUser = urlParams.get('user');

    const {name, token} = getCookies();
    if (!name || !token) {
      window.location.replace("/chat/login")
      return;
    }

    const socketConn = adminConnectSocket({
      name,
      token,
      chatUser,
      setHeader, 
      setMessages, 
      setNumMessages
    });
    socketConn.on("chatUpdate", (data) => {
      setMessages(messages.append(data))
    });
    socketConn.on("chatUpdateAdmin", function (data) {
      setMessages(messages.append(data))
    });
    
    setSocket(socketConn);
  }, []);

  const changeInput = (event) => {
    setMsgInput(event.target.value);
  }

  const sendMessage = (event) => {
    if (!socket) return;

    socket.emit("adminMessage", msgInput);
  }

  return (
    <Layout>
      <SEO title="Admin Chat" />
      <Subpage>
        <h2>{header}</h2>
        <div className="messagesWrapper">
          {messages.map((msg, index) => (
            <ChatMessage message={msg} key={index}/>
          ))}
        </div>
        <form onSubmit={sendMessage} onChange={changeInput}>
          <input type="text" value={msgInput}></input>
          <input type="submit" value="send"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default AdminChatPage;
