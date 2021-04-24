import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import constants from "../../../constants.js";
import { navigate } from "../../js/utils.js";

import "../../assets/styles.css";

const SERVER_URL = constants["SERVER_URL"];

const ChatLoginPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setCookies("name", "", { path: '/chat' });
    setCookies("token", "", { path: '/chat' });
  }, []);

  const login = (username, password) => {
    axios.post(SERVER_URL + "login", {
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
        setErrorMessage(response.data.status);
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
        <form onSubmit={handleLogin} className="cred-box">
          <input className="text-input" type="text" id="name"
            name="name" placeholder="username"/>
          <input className="text-input" type="password"
            name="password" placeholder="password"/>

          {errorMessage &&
            <div className="error-message">{errorMessage}</div>
          }
          <div className="button-box">
            <input className="cred-button" type="submit" value="login"></input>
          </div>
        </form>

        <span className="here-before"> Never been here before? <a href="/chat/register">Register</a> </span>
        <span className="learn-more"> <a href="/chat/info">Click here</a> for more information </span>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
