import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";
import ChatMessage from "../components/chatMessage";
import { getCookies } from "../js/cookies.js";
import { connectSocket } from "../js/socket.js";

import "../assets/styles.css";

const ChatPage = () => {
  const [header, setHeader] = useState("");
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const {username, token} = getCookies();
    if (!username || !token) {
      window.location.replace("/chat/login")
      return;
    }

    const socketConn = connectSocket({
      username,
      token,
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

    socket.emit("message", msgInput);
  }

  return (
    <Layout>
      <SEO title="Chat" />
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

export default ChatPage;
