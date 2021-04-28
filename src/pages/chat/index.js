import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import ChatMessage from "../../components/chatMessage";
import Collapsible from "../../components/collapsible";
import ActivityCircle from "../../components/activityCircle";

import { navigate } from "../../js/utils.js";
import { logout, roomPage, getAdmins } from "../../js/chat.js";
import { connectSocket, disconnectSocket, 
         listenForMessages, sendMessage, oldMessages, 
         sendUpdateActive, listenForActivity } from "../../js/socket.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'

import "../../assets/styles.css";
import "../../assets/chat.css";

const ChatPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [contact, setContact] = useState(null);
  const [admins, setAdmins] = useState({});
  const [room, setRoom] = useState("");
  const [activity, setActivity] = useState(null);

  const chatBarRef = useRef(null);
  const formRef = useRef(null);
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const { name, token } = cookies;
    if (!name || !token)
      navigate("/chat/login");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const room = urlParams.get("user") || name;
    
    connectSocket({
      name, 
      token, 
      room, 
      setMessagesScrollBot, 
      setMessagesScrollTop,
      setContact,
      setActivity,
    });
    setRoom(room);

    const isAdmin = room === name ? false : true;
    setIsAdmin(isAdmin);

    const getAdminInfo = async () => {
      const adminInfo = await getAdmins();
      listenForMessages(updateMessages, adminInfo);
      setAdmins(adminInfo);
    }
    getAdminInfo();

    sendUpdateActive();
    listenForActivity(updateActivity, isAdmin);
    
    return () => disconnectSocket();
  }, [cookies]);

  const setMessagesScrollBot = (data) => {
    setMessages(messages => messages.concat(data));
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  }

  const setMessagesScrollTop = (data) => {
    const box = document.getElementById("messagesBox");
    const oldHeight = box.scrollHeight;

    setMessages(messages => data.concat(messages));
    box.scrollTop = box.scrollHeight - oldHeight;
  }

  const updateMessages = (data, admins) => {
    const box = document.getElementById("messagesBox");
    if (box.scrollTop >= (box.scrollHeight - box.offsetHeight)) {
      setMessagesScrollBot(data);
    }
    else {
      setMessages(messages => messages.concat(data));
    }

    // Update admin contact info if appropriate
    const sender = data.sender;
    if (sender in admins && (!contact || sender !== contact.name)) {
      setContact(admins[sender]);
    }
  }

  const handleInput = (event) => {
    setMsgInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msgInput.trim() !== "") {
      sendMessage(msgInput.trim());
      setMsgInput("");
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
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit(e)
    }
  }

  const handleLogout = () => {
    logout(setCookies);
  }
  const handleRoomPage = () => {
    roomPage(setCookies);
  }

  const handleGetOldMessages = (e) => {
    if (e.target.scrollTop === 0) {
      oldMessages(5); // get 5 past messages
    }
  }

  const updateActivity = (data, isAdmin) => {
    if (isAdmin && !data.admin) {
      setActivity(activity => ({...activity, active: true}));
    }
    else if (!isAdmin && data.admin) {
      setActivity(activity => ({...activity, active: true}));
    }
  }

  return (
    <Layout>
      <SEO title="Chat" />
      <Subpage>
        {isAdmin ? 
          <div className="chat-header">
            <h2>
              {`Chat with ${room}`}
              {activity ? <ActivityCircle activity={activity} /> : null}
            </h2>
            <p><a onClick={handleRoomPage}>Back to all rooms</a></p> 
          </div>
          :
          <div>
            <h2>{room}</h2>
            <div className="logoutWrapper">
              <span>Logged in as {cookies.name}</span>
              <span>Not you? <a onClick={handleLogout}>Logout</a></span>
            </div>
            <div className="info-wrapper">
              {contact && activity ? 
                <div>
                  Chatting with: {contact.name}
                  <ActivityCircle activity={activity} />
                </div>
                :
                <Collapsible>
                  <div className="collapsible">what do i do now? &#9660;</div>
                  <div className="default-info">
                    please feel free to message any and all questions you may
                    have! we are not an automated platform (real people
                    respond), so please give us some time and check back for any
                    responses.
                  </div>
                </Collapsible>
              }
            </div>
          </div>
        }
        <div ref={messagesRef} onScroll={handleGetOldMessages} className="messagesWrapper" id="messagesBox">
          {messages.map((msg, index) => (
            <ChatMessage 
              message={msg} 
              name={cookies.name} 
              room={room} 
              key={index} 
              admins={admins}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form ref={formRef} 
          className="chatInput" 
          onSubmit={handleSubmit} 
          // onFocus={handleOnFocus}
          // onBlur={handleOnBlur}
        >
          <TextareaAutosize onKeyDown={onEnterPress} ref={chatBarRef} onHeightChange={handleScroll} className="chatBar" maxRows="6" type="text" placeholder="send message" value={msgInput} onChange={handleInput} required/>
          <button className="chatSubmit" type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatPage;
