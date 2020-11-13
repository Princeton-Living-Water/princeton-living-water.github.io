import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import { connectSocket, disconnectSocket, listenForMessages, sendMessage } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'

import "../../assets/styles.css";
import "../../assets/chat.css";

const ChatPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [title, setTitle] = useState("");
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const chatBarRef = useRef(null);
  const formRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const {name, token} = cookies;
      if (!name || !token) {
        window.location.replace("/chat/login");
        return;
      }

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const room = urlParams.get("user") || name;

      connectSocket({ name, token, room, setMessages, setNumMessages });
      listenForMessages(updateMessages);
      
      const title = room === name ? name : `Chat with ${room}`;
      setTitle(title);
      
      return () => disconnectSocket();
    }
  }, []);

  const updateMessages = (data) => {
    setMessages(messages => messages.concat(data));
    // messagesRef.current.style["messageBody"].scrollTop = messagesRef.current.style["messageBody"].scrollHeight;
    // console.log(messagesRef.current.style["messageBody"].scrollTop);
  }

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msgInput != "") {
      sendMessage(msgInput);
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
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e)
    }
  }

  return (
    <Layout>
      <SEO title="Chat" />
      <Subpage>
        <h2>{title}</h2>
        <div ref={messagesRef} className="messagesWrapper">
          {messages.map((msg, index) => (
            <ChatMessage message={msg} user={cookies.name} key={index}/>
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

export default ChatPage;
