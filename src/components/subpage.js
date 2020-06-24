import React from "react";
import PropTypes from "prop-types";

import logo from "../assets/img/logo.png";

import "../assets/styles.css";

const Subpage = ({ children }) => {
  return (
    <div className="subpage">
      <a href="/" className="title">
        <img src={logo} alt="Living Water" className="logo" />
        <h1>Living Water</h1>
      </a>
      {children}
    </div>
  );
};

Subpage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subpage;
