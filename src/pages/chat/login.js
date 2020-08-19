import React, { useEffect } from "react";
import axios from "axios";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import { setCookie } from "../../js/cookies.js";

import "../../assets/styles.css";

const API_URL = "http://127.0.0.1:5000/";

const ChatLoginPage = () => {
  useEffect(() => {
    setCookie("username", "");
    setCookie("token", "");
  }, [])
  
  const login = (event) => {
    event.preventDefault()

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    axios.post(API_URL + "login", {
      username: user_input,
      password: pass_input
    })
    .then((response) => {
      if (response.data.status == "success") {
        setCookie("username", user_input);
        setCookie("token", response.data.token);
        if (response.data.admin !== "no")
          window.location.replace("/admin");
        else
          window.location.replace("/chat");
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

  return (
    <Layout>
      <SEO title="Chat Login" />
      <Subpage>
        <h3> Welcome back! Sign into Living Water Chat </h3><br/>
        <span> Never been here before? <a href="/chat/register">Register</a> </span><br/>
        <form onSubmit={login}>
          <label>Username:</label><br/>
          <input type="text" name="username"/><br/>
          <label>Password:</label><br/>
          <input type="password" name="password"/><br/><br/>
          <input type="submit" value="Sign in"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
