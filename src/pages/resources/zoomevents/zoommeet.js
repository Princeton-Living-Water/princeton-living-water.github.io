import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Subpage from "../../../components/subpage";

import "../../../assets/styles.css";

const ZoomMeetPage = () => (
  <Layout>
    <SEO title="Zoom Meet" />
    <Subpage>
      <div class="article">
        <h2>Grab a meal/chat via Zoom!</h2>
        <h3>What is it?</h3>
        <p>
          If you sign up below, we will match you with someone (might be your friend, or someone new) and we will give
          you each other's contact. Meet up via Zoom!
        </p>
        <br />
        <h3>Sign up below:</h3>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrjKFGVKYJyXHiVR?backgroundColor=orange"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="780"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </div>
    </Subpage>
  </Layout>
);

export default ZoomMeetPage;
