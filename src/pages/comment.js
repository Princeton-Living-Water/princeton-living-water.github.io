import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";

const CommentPage = () => (
  <Layout>
    <SEO title="Comment" />
    <Subpage>
      <h3> leave us a note! (takes a minute for the form below to load) </h3>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        title="Comment Form"
        src="https://airtable.com/embed/shrDkUm9NGBTrU60N?backgroundColor=green"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="799"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </Subpage>
  </Layout>
);

export default CommentPage;
