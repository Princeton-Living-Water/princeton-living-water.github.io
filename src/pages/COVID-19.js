import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";

const COVIDPage = () => (
  <Layout>
    <SEO title="COVID-19" />
    <Subpage>
      <h2>COVID-19</h2>
      <p className="article">
        Living Water is continuing to try to serve the student populace with the love of Christ despite the coronavirus
        splitting us apart. We are handing out{" "}
        <strong>
          <a style={{ color: "red" }} href="/resources/handsani">
            hand sanitizer goody bags
          </a>
        </strong>
        <i> (please read to see how we are delivering hand sanitizers and taking precautions) </i>
        and providing these digital resources for you all to check out and use during your special second semester!
        <br />
        <br />
        Click on the boxes to find out what you can do!
      </p>
      <div className="colcontainer">
        <div className="leftblockcol">
          <a href="/resources/churches">
            <div className="block">
              <h3>churches and fellowships</h3>
              <p>join online services at local churches and online meetings led by in-school Christian fellowships</p>
            </div>
          </a>
          <a href="/resources/zoomevents">
            <div className="block">
              <h3>zoom events and meetups</h3>
              <p>join planned events by other students on campus, or e-meet new people on campus</p>
            </div>
          </a>
          <a href="/resources/podcasts">
            <div className="block">
              <h3>podcasts and video series</h3>
              <p>some podcasts and video series about the Bible, Christian questions, and more</p>
            </div>
          </a>
        </div>
        <div className="rightblockcol">
          <a href="/resources/devos">
            <div className="block">
              <h3>daily devotionals</h3>
              <p>meditate on the Word of God with us by reading a short passage</p>
            </div>
          </a>
          <a href="/resources/sermons">
            <div className="block">
              <h3>sermons</h3>
              <p>some great sermons and messages recommended by fellow students on campus</p>
            </div>
          </a>
          <a href="/resources/songs">
            <div className="block">
              <h3>songs</h3>
              <p>songs recommended and performed by students on campus</p>
            </div>
          </a>
          <a href="/resources/books">
            <div className="block">
              <h3>books</h3>
              <p>great books about Christ, Christian theology, and more</p>
            </div>
          </a>
        </div>
      </div>
    </Subpage>
  </Layout>
);

export default COVIDPage;
