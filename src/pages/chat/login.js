import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import constants from "../../../constants.js";
import { navigate } from "../../js/utils.js";

import "../../assets/styles.css";

const API_URL = constants["API_URL"];

const ChatLoginPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { name, token } = cookies;

    setCookies("name", "", { path: '/chat' });
    setCookies("token", "", { path: '/chat' });
  }, []);

  const login = (username, password) => {
    axios.post(API_URL + "login", {
      username, 
      password
    })
    .then((response) => {
      if (response.data.status === "success") {
        setCookies("name", response.data.name, { path: '/chat' });
        setCookies("token", response.data.token, { path: '/chat' });
        if (response.data.admin === "yes")
          navigate("/chat/admin");
        else
          navigate("/chat");
      }
      else {
        // Place handling of error message here
        console.log("Login failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const handleLogin = (event) => {
    event.preventDefault()

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    login(user_input, pass_input);
  }

  return (
    <Layout>
      <SEO title="Chat Login" />
      <Subpage>
        <h3> Welcome back! Sign into Living Water Chat </h3><br/>
        <form onSubmit={handleLogin}>
          <input className="text-input" type="text" id="name"
            name="name" placeholder="username"/><br/>
          <input className="text-input" type="password"
            name="password" placeholder="password"/><br/><br/>
          <div className="button-box">
            <input className="cred-button" type="submit" value="login"></input>
          </div>
        </form>
        <span className="here-before"> Never been here before? <a href="/chat/register">Register</a> </span><br/>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
