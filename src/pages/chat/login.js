import React, { useEffect } from "react";
import axios from "axios";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const API_URL = "http://localhost:5000/";

const ChatLoginPage = () => {
  const login = (event) => {
    event.preventDefault()

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    axios.post(API_URL + "createUser", {
      username: user_input,
      password: pass_input
    })
    .then(
      (response) => {
        if (response.data.status == "success") {
          document.cookie = "username=" + user_input;
          document.cookie = "token=" + response.data.token;
          if (response.data.admin !== "no")
            window.location.href = "./admin";
          else
            window.location.href = "./chat";
        }
        else {
          // Place handling of error message here
          console.log("Login failed");
        }
      },
      (error) => {
        console.log(error);
      }
    )
    console.log(event.target[0].value)
  }

  return (
    <Layout>
      <SEO title="Sign into LW Chat" />
      <Subpage>
        <h3> Welcome back! Sign into Living Water Chat </h3><br/>
        <span> Never been here before? <a href="/chat/register">Register</a> </span><br/>
        <form onSubmit={login}>
          <label>Username:</label><br/>
          <input type="text" id="username" name="username"/><br/>
          <label>Password:</label><br/>
          <input type="password" id="password" name="password"/><br/><br/>
          <input type="submit" value="Sign in"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
