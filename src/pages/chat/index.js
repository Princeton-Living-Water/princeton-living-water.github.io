
import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { connectSocket, disconnectSocket, listenForMessages, sendMessage } from "../../js/socket.js";

import "../../assets/styles.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [cookies, setCookies] = useCookies(["name", "token"]);

  useEffect(() => {
    const {name, token} = cookies;
    if (!name || !token) {
      navigate("/chat/login");
      return;
    }

    connectSocket({ name, token, setMessages, setNumMessages });
    listenForMessages(updateMessages);
    
    return () => disconnectSocket();
  }, []);

  const updateMessages = (data) => {
    setMessages(messages => messages.concat(data));
  }

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(msgInput);
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="send message" value={msgInput} onChange={handleInput}/>
          <input type="submit" value="send"/>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatPage;
