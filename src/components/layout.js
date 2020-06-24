/**
 * Layout component for all pages
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Shadows+Into+Light|Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
