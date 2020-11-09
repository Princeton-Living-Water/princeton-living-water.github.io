
import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { connectSocket, disconnectSocket, listenForMessages, sendMessage } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "../../assets/styles.css";
import "../../assets/chat.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [cookies, setCookies] = useCookies(["name", "token"]);

  useEffect(() => {
    const {name, token} = cookies;
    if (!name || !token) {
      if (typeof window !== `undefined`) {
        window.location.replace("/chat/login");
      }
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
    setMsgInput("")
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
        <form className="chatInput" onSubmit={handleSubmit}>
          <input className="chatBar" type="text" placeholder="send message" value={msgInput} onChange={handleInput} required/>
          <button className="chatSubmit" type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatPage;
