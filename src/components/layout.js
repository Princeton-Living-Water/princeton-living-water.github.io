/**
 * Layout component for all pages
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const GA_MEASUREMENT_ID = "G-8Y039JDCPG";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Shadows+Into+Light|Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
        )}
        {process.env.NODE_ENV === "production" && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){ window.dataLayer.push(arguments); };
              window.gtag("js", new Date());
              window.gtag("config", "${GA_MEASUREMENT_ID}", {
                send_page_view: false
              });
            `}
          </script>
        )}
      </Helmet>
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
