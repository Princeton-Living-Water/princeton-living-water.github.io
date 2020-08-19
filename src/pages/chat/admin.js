import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import RoomCard from "../../components/roomCard";
import { getCookies } from "../../js/cookies.js";

import "../../assets/styles.css";

const API_URL = "http://localhost:5000/";

const AdminPage = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const getRooms = async () => {
      const {username, token} = getCookies()
      if (!username || !token) {
        window.location.replace("/chat/login")
        return;
      }

      await axios.get(API_URL + "getRooms", {
        params: { user: username },
        headers: {
          'Authorization': "Bearer " + token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if (response.data.status !== "success") {
          window.location.replace("/login");
          return;
        }
        setRooms(response.data.chats);
      })
    }

    getRooms()
  }, [])

  return (
    <Layout>
      <SEO title="Admin" />
      <Subpage>
        <h2>Admin Page</h2>
        <div>
          {rooms.map((room, index) => (
            <RoomCard room={room} key={index} />
          ))}
        </div>
      </Subpage>
    </Layout>
  );
};

export default AdminPage;
