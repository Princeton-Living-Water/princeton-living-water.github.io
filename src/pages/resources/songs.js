import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const SongsPage = () => (
  <Layout>
    <SEO title="Songs" />
    <Subpage>
      <div className="article">
        <h2>songs</h2>
        <h3>Spotify playlist</h3>
        <p>
          <a href="https://open.spotify.com/playlist/7LTG6le2BvsLxAAwsPqh0y" target="_blank">
            Living Water
          </a>{" "}
          - a mix bag of all kinds of Christian music
        </p>
        <hr />
        <h3>
          Featured song -- <i>Though You Slay Me</i> by Shane & Shane
        </h3>
        <div className="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qyUPz6_TciY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Though You Slay Me"
          ></iframe>
        </div>
        <p>
          A song about how we may suffer but God is still the one in charge and that we Christians have faith in God
          even through the hardest of times. It touches on the Christian faith that hold all hope in the God who is
          always true to His Word of salvation and kingdom come despite what the current situation seems like.
          <br />
          This version contains a short sermon audio in the middle that explains this idea!
        </p>
      </div>
    </Subpage>
  </Layout>
);

export default SongsPage;
