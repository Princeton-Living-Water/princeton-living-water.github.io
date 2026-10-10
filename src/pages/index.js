import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import logo from "../assets/img/logo.png";

import "../assets/styles.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page">
      <div className="main">
        <img src={logo} alt="Living Water" width="220" />
        <h1>Living Water</h1>
        <div className="menu">
          <p>
            {/* <a href="/COVID-19" style={{ color: "red" }}>
              <strong>COVID-19</strong>
            </a>{" "}
            &#47;  */}
            <a href="/about">about</a> &#47; <a href="/faq">faq</a> &#47; <a href="/chat">message us!</a>{" "}
            &#47; <a href="/contact">contact</a>
          </p>
        </div>
        <a
          href="https://www.princetonchristianchurch.org/worship-and-fellowship/princeton-uni-students"
          style={{ marginTop: "0.5rem", fontSize: "1rem", fontWeight: "normal" }}
        >
          get connected to a local church!
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
