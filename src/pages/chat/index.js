import React from "react";

import Layout from "../../components/layout";
import MessageForm from "../../components/messageForm";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

const MessagePage = () => (
  <Layout>
    <SEO title="Message Us" />
    <Subpage>
      <h2>message us!</h2>
      <MessageForm />
    </Subpage>
  </Layout>
);

export default MessagePage;
