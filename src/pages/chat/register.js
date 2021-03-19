import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import constants from "../../../constants.js";
import { navigate } from "../../js/utils.js";

import "../../assets/styles.css";
import "../../assets/chat.css";

const SERVER_URL = constants["SERVER_URL"];

const ChatRegisterPage = () => {
  const [cookies, setCookies] = useCookies(["name", "token"]);
  const [anonymous, setAnonymous] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signup = (event) => {
    event.preventDefault();

    const anonInput = event.target[2].checked;
    const userInput = event.target[0].value;
    const passInput = event.target[1].value;
    if (userInput === "" || passInput === "") {
      setErrorMessage("username or password missing");
      return;
    }

    const userData = {
      username: userInput,
      password: passInput,
      anonymous: anonInput
    }

    if (!anonInput) {
      const adminInput = event.target[5].checked;
      const firstNameInput = event.target[3].value;
      const lastNameInput = event.target[4].value;
      if (firstNameInput === "" || lastNameInput === "") {
        setErrorMessage("name missing");
        return;
      }

      userData["firstName"] = firstNameInput;
      userData["lastName"] = lastNameInput;
      userData["admin"] = adminInput;

      if (adminInput) {
        const adminPassInput = event.target[6].value;
        if (adminPassInput === "") {
          setErrorMessage("admin password missing");
          return;
        }

        userData["adminPassword"] = adminPassInput;
      }
    }

    axios.post(SERVER_URL + "createUser", userData)
    .then((response) => {
      if (response.data.status === "success") {
        setCookies("name", response.data.name, { path: '/chat' });
        setCookies("token", response.data.token, { path: '/chat' });
        console.log(cookies);
        if (response.data.admin === "yes")
          navigate("/chat/admin");
        else
          navigate("/chat");
      }
      else {
        setErrorMessage(response.data.status);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleAnonymousChange = () => {
    setAnonymous(!anonymous);
  }

  const handleIsAdminChange = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <Layout>
      <SEO title="Chat Register" />
      <Subpage>
        <h3> Register for Living Water Chat </h3><br/>
        <form onSubmit={signup} className="cred-box">
          <input className="text-input" type="text" name="name" placeholder="username"/>
          <input className="text-input" type="password" name="password" placeholder="password"/>

          <label className="anonymous-input">
            <input className="checkbox-input" type="checkbox" name="anonymous" 
              checked={anonymous} onChange={handleAnonymousChange} />
            Keep me anonymous
          </label>
          
          {!anonymous &&
            <div className="additional-info">
              <div className="additional-info-name">
                <input className="additional-name-input" type="text" name="firstname" placeholder="first name"/>
                <input className="additional-name-input" type="text" name="lastname" placeholder="last name"/>
              </div>
              <div className="additional-info-admin">
                <label>
                  <input className="checkbox-input" type="checkbox" name="admin" 
                    checked={isAdmin} onChange={handleIsAdminChange} />
                  Admin?
                </label>
                {isAdmin &&
                  <input className="additional-admin-input" type="password" name="adminpass" placeholder="admin password"/>
                }
              </div>
            </div>
          }

          {errorMessage &&
            <div className="error-message">{errorMessage}</div>
          }

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
