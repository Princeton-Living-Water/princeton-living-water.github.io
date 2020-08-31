import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";
import ChatMessage from "../components/chatMessage";
import { connectSocket } from "../js/socket.js";

import "../assets/styles.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [cookies, setCookies] = useCookies(["name", "token"]);

  useEffect(() => {
    const {username, token} = cookies;
    if (!username || !token) {
      window.location.replace("/chat/login")
      return;
    }

    const socketConn = connectSocket({
      username,
      token,
      setMessages, 
      setNumMessages
    });

    socketConn.on("chatUpdate", (data) => {
      setMessages(messages.append(data));
    });
    socketConn.on("chatUpdateAdmin", (data) => {
      setMessages(messages.append(data));
    });
    
    setSocket(socketConn);
  }, []);

  console.log(socket);

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const sendMessage = (event) => {
    event.preventDefault();
    if (!socket) return;

    socket.emit("message", msgInput);
  }

  return (
    <Layout>
      <SEO title="Chat" />
      <Subpage>
        <h2>{cookies.name}</h2>
        <div className="messagesWrapper">
          {messages.map((msg, index) => (
            <ChatMessage message={msg} key={index}/>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input type="text" placeholder="send message" value={msgInput} onChange={handleInput}/>
          <input type="submit" value="send"/>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatPage;
