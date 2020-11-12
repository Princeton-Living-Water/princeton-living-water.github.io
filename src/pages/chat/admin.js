import React, { useState, useEffect } from "react";
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
    const {name, token} = cookies;
    const getRooms = async () => {
      if (!name || !token) {
        if (typeof window !== `undefined`) {
          console.log(cookies)
          window.location.replace("/chat/login")
        }
        return;
      }

      await axios.get(API_URL + "getRooms", {
        params: { name: name },
        headers: {
          'Authorization': "Bearer " + token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if (response.data.status !== "success") {
          if (typeof window !== `undefined`) {
            console.log(response)
            window.location.replace("/chat/login");
          }
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
