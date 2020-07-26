import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const ChatLoginPage = () => {
  return (
    <Layout>
      <SEO title="Sign into LW Chat" />
      <Subpage>
        <h3> Welcome back! Sign into Living Water Chat </h3><br/>
        <a> Been here before? <a href="/chat/register">Register</a></a><br/>
        <form action="/api-login-endpoint">
          <label for="email">Email:</label><br/>
          <input type="text" id="email" name="email"/><br/>
          <label for="password">Password:</label><br/>
          <input type="password" id="password" name="password"/><br/><br/>
          <input type="submit" value="Sign in"></input>
        </form>
      </Subpage>
    </Layout>
  );
};

export default ChatLoginPage;
