import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const SermonsPage = () => (
  <Layout>
    <SEO title="Sermons" />
    <Subpage>
      <div class="article">
        <h2>sermons</h2>
        <h3>What is the Gospel - Paul Washer</h3>
        <div class="iframe-container">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/9mMQ12nmDow"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          An extensive sermon about what the Gospel is in the Christian faith. It is a bit long, but it goes into full
          depth about what the Christian Gospel preaches.
        </p>
        <hr />
        <h3>The All-Providing King Who Would Not Be King - John Piper</h3>
        <div class="iframe-container">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/jX6Tni1_rm8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>"When Jesus gives his flesh on the cross, he becomes bread for sinners who believe."</p>
        <hr />
        <h3>Jesus Died! - Paul Washer</h3>
        <div class="iframe-container">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/a11ASw5NRUw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          Paul Washer talks about how not only did Christ die for sins, but He also rose from the dead and ascended into
          heaven.
        </p>
        <hr />
        <h3>Be Still And Know that I Am God (Covid-19) - Francis Chan</h3>
        <div class="iframe-container">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/a3T1srvSgKw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>During this Covid-19 fear and worry is very real, but God is calling you to be still and see Him work.</p>
      </div>
    </Subpage>
  </Layout>
);

export default SermonsPage;
