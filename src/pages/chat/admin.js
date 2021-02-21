import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import RoomCard from "../../components/roomCard";
import AdminInfo from "../../components/AdminInfo";
import constants from "../../../constants.js";
import { navigate } from "../../js/utils.js";
import { logout } from "../../js/chat.js";
import { connectSocket, listenForRooms } from "../../js/socket.js";

import "../../assets/styles.css";

const API_URL = constants["API_URL"];

const AdminPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const {name, token} = cookies;
    if (!name || !token) navigate("/chat/login");
    
    const getRooms = async () => {
      await axios.get(API_URL + "getRooms", {
        params: { name: name },
        headers: {
          'Authorization': "Bearer " + token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if (response.data.status !== "success") {
          console.log(response);
          navigate("/chat/login");
        }
        setRooms(response.data.chats);
      })
    }

    getRooms();
    connectSocket({
      name, 
      token, 
      room: "admin",
    });
    listenForRooms(updateRooms);
  }, []);

  const handleLogout = () => {
    logout(setCookies);
  }

  const updateRooms = (data) => {
    setRooms(rooms => {
      const updatedRooms = Array.from(rooms);
      const updatedRoom = updatedRooms.find(room => room.name == data.room);
      if (updatedRoom) {
        updatedRoom.numUnread = data.numUnread;
      }
      else {
        const newRoom = {
          "name": data.room,
          "numUnread": data.numUnread,
        }
        updatedRooms.unshift(newRoom);
      }

      return updatedRooms;
    });
  }

  return (
    <Layout>
      <SEO title="Admin" />
      <Subpage>
        <h2>Admin Page</h2>
        <div className="logoutWrapper">
          <span>Logged in as {cookies.name}</span>
          <span>Not you? <a onClick={handleLogout}>Logout</a></span>
        </div>
        <div>
          {rooms.map((room, index) => (
            <RoomCard room={room} key={index} />
          ))}
        </div>
        <AdminInfo name="Joe" email="jc84" phone="908-323-8864" color="#b9c97b"/>
      </Subpage>
    </Layout>
  );
};

export default AdminPage;
