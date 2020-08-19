import React from "react";
import axios from "axios";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import { setCookie } from "../../js/cookies.js";

import "../../assets/styles.css";
import "../../assets/chat.css";

const API_URL = "http://127.0.0.1:5000/";

const ChatSignupPage = () => {
  const signup = (event) => {
    event.preventDevault();

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    axios.post(API_URL + "createUser", {
      username: user_input,
      password: pass_input,
    })
    .then((response) => {
      if (response.data.status == "success") {
        setCookie("username", user_input);
        setCookie("token", response.data.token)
        if (response.data.admin !== "no")
          window.location.replace("/admin");
        else
          window.location.replace("/chat");
      }
      else {
        // Place handling of error message here
        console.log("Signup failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Layout>
      <SEO title="Chat Signup" />
      <Subpage>
        <h3> Register for Living Water Chat </h3><br/>
        <form onSubmit={signup} class="cred-box">
          <input class="text-input" type="text" id="name"
            name="name" placeholder="username"/><br/>
          <input class="text-input" type="password"
            name="password" placeholder="password"/><br/><br/>
          <div class="button-box">
            <input class="cred-button" type="submit" value="register"></input>
          </div>
        </form>
        <span class="here-before"> Been here before? <a href="/chat/login">Log in</a> </span>
      </Subpage>
    </Layout>
  );
};

export default ChatSignupPage;
