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
  const [messages, setMessages] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [msgInput, setMsgInput] = useState("");
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const chatBarRef = useRef(null);
  const formRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    const {name, token} = cookies;
    if (!name || !token) {
      if (typeof window !== `undefined`) {
        window.location.replace("/chat/login");
      }
      return;
    }

    connectSocket({ name, token, room: name, setMessages, setNumMessages });
    listenForMessages(updateMessages);
    
    return () => disconnectSocket();
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
    if(event > 100) {
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
        <h2>{cookies.name}</h2>
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
