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
            <a href="/COVID-19" style={{ color: "red" }}>
              <strong>COVID-19</strong>
            </a>{" "}
            &#47; <a href="/about">about</a> &#47; <a href="/faq">faq</a> &#47; <a href="/comment">leave a note</a>{" "}
            &#47; <a href="/contact">contact</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
