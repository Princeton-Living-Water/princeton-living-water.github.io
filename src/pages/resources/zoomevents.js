import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const ZoomEventsPage = () => (
  <Layout>
    <SEO title="Zomm Events" />
    <Subpage>
      <h2> Zoom Events and Meetups </h2>
      <div className="colcontainer">
        <div className="leftblockcol">
          <a href="/resources/zoomevents/learntopray">
            <div className="block">
              <h3>Learn to Pray!</h3>
              <p>
                An alumni and a fellow student teaches how to pray! Whether you are a new Christian or someone curious
                about Christian practices, please join for a good time of talking to God.
              </p>
            </div>
          </a>
        </div>
        <div className="rightblockcol">
          <a href="/resources/zoomevents/zoommeet">
            <div className="block">
              <h3>Have Zoom Meal or Chat!</h3>
              <p>Meet someone new via Zoom for a virtual meal or a chat!</p>
            </div>
          </a>
        </div>
      </div>
    </Subpage>
  </Layout>
);

export default ZoomEventsPage;
