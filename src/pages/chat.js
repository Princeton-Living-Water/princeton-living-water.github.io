import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";

const ChatInfoPage = () => {
  return (
    <Layout>
      <SEO title="Register for LW Chat" />
      <Subpage>
        <h3> what is the Living Water Chat?</h3>
        <p>
          The Living Water Chat is an opportunity to talk to the folks at Living water
          about your most salient faith-related questions.
        </p>
        <br/>
        <a href="chat/register">
          Sign up
        </a>
        <br/>
        <a href="chat/login">
          Returning? Log in here
        </a>
      </Subpage>
    </Layout>
  );
};

export default ChatInfoPage;
