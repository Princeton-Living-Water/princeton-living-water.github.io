import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const API_URL = "http://127.0.0.1:5000/";

const ChatLoginPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);

  useEffect(() => {
    setCookies("name", "");
    setCookies("token", "");
  }, []);
  
  const login = (event) => {
    event.preventDefault()

    const user_input = event.target[0].value;
    const pass_input = event.target[1].value;
    axios.post(API_URL + "login", {
      username: user_input,
      password: pass_input
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
        <form onSubmit={login}>
          <input className="text-input" type="text" id="name"
            name="name" placeholder="username"/><br/>
          <input className="text-input" type="password"
            name="password" placeholder="password"/><br/><br/>
          <div className="button-box">
            <input className="cred-button" type="submit" value="Sign in"></input>
          </div>
        </form>
        <span className="here-before"> Never been here before? <a href="/chat/register">Register</a> </span><br/>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
