import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import RoomCard from "../../components/roomCard";

import "../../assets/styles.css";

import constants from '../../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];
const API_URL = constants["API_URL"];

const AdminPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const {name, token} = cookies;
      if (!name || !token) {
<<<<<<< HEAD
        if (typeof window !== `undefined`) {
          window.location.replace("/chat/login")
        }
        return;
=======
        navigate("/chat/login");
>>>>>>> 8d098c4242e6c290d86c400bd75f37b5f17aed39
      }

      await axios.get(API_URL + "getRooms", {
        params: { name: name },
        headers: {
          'Authorization': "Bearer " + token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if (response.data.status !== "success") {
<<<<<<< HEAD
          if (typeof window !== `undefined`) {
            window.location.replace("/chat/login");
          }
          return;
=======
          navigate("/chat/login");
>>>>>>> 8d098c4242e6c290d86c400bd75f37b5f17aed39
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
