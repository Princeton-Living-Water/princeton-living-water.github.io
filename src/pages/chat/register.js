import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const ChatRegisterPage = () => {
  return (
    <Layout>
      <SEO title="Register for LW Chat" />
      <Subpage>
        <h3> Register for Living Water Chat </h3><br/>
        <a> Been here before? <a href="/chat/login">Log in</a> </a>
        <form action="/api-registration-endpoint">
          <label for="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/>
          <label for="email">Email:</label><br/>
          <input type="text" id="email" name="email"/><br/>
          <label for="password">Password:</label><br/>
          <input type="password" id="password" name="password"/><br/><br/>
          <input type="submit" value="Register"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatRegisterPage;
