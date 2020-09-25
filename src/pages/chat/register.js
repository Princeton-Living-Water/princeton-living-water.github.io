import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";
import "../../assets/chat.css";
import constants from '../../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];
const API_URL = constants["API_URL"];

const ChatRegisterPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);

  const signup = (event) => {
    event.preventDefault();

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    axios.post(API_URL + "createUser", {
      username: user_input,
      password: pass_input,
    })
    .then((response) => {
      if (response.data.status === "success") {
        setCookies("name", response.data.name);
        setCookies("token", response.data.token);
        if (response.data.admin !== "no")
          window.location.replace("/chat/admin");
        else
          window.location.replace("/chat");
      }
      else {
        // Place handling of error message here
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Layout>
      <SEO title="Chat Register" />
      <Subpage>
        <h3> Register for Living Water Chat </h3><br/>
        <form onSubmit={signup} className="cred-box">
          <input className="text-input" type="text" name="name" placeholder="username"/><br/>
          <input className="text-input" type="password" name="password" placeholder="password"/><br/><br/>
          <div className="button-box">
            <input className="cred-button" type="submit" value="register"></input>
          </div>
        </form>
        <span className="here-before"> Been here before? <a href="/chat/login">Log in</a> </span>
      </Subpage>
    </Layout>
  );
};

export default ChatRegisterPage;
