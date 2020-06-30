import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

import solidjoys from "../../assets/img/solidjoys.png";
import apj from "../../assets/img/askpastorjohn.png";
import gty from "../../assets/img/gracetoyou.png";
import bema from "../../assets/img/bema.png";
import readbible from "../../assets/img/readbible.png";
import wordstudy from "../../assets/img/wordstudy.png";

const PodcastsPage = () => (
  <Layout>
    <SEO title="Podcasts" />
    <Subpage>
      <div className="article">
        <h2>podcasts</h2>
        <div className="resource-container">
          <a href="https://open.spotify.com/show/0JhHz8XP7Zeuorxr2CllKQ" target="_blank">
            <img src={solidjoys} alt="Solid Joys" className="resourcelogo" />
          </a>
          <p>
            <a href="https://open.spotify.com/show/0JhHz8XP7Zeuorxr2CllKQ" target="_blank">
              <strong>Solid Joys</strong>
            </a>{" "}
            is a devotional podcast series by John Piper that goes through short verses with John Piper reading out his
            take on the verses.
          </p>
        </div>
        <div className="resource-container">
          <a href="https://open.spotify.com/show/5vPg9kNdtiKdsjAaox2jOC" target="_blank">
            <img src={apj} alt="Ask Pastor John" className="resourcelogo" />
          </a>
          <p>
            <a href="https://open.spotify.com/show/5vPg9kNdtiKdsjAaox2jOC" target="_blank">
              <strong>Ask Pastor John</strong>
            </a>{" "}
            is a podcast series where John Piper answers tough theological and pastoral questions.
          </p>
        </div>
        <div className="resource-container">
          <a href="https://open.spotify.com/show/4mxQ8cMMIPs7Lls6OAL0M7" target="_blank">
            <img src={gty} alt="Grace to You" className="resourcelogo" />
          </a>
          <p>
            <a href="https://open.spotify.com/show/4mxQ8cMMIPs7Lls6OAL0M7" target="_blank">
              <strong>Grace to You</strong>
            </a>{" "}
            is a podcast series where John MacArthur takes you through Scripture verse by verse, showing you what the
            Bible means by what it says.
          </p>
        </div>
        <div className="resource-container">
          <a href="https://bemadiscipleship.com/how-to-listen" target="_blank">
            <img src={bema} alt="The BEMA Podcasts" className="resourcelogo" />
          </a>
          <p>
            <a href="https://bemadiscipleship.com/how-to-listen" target="_blank">
              <strong>The BEMA Podcasts</strong>
            </a>{" "}
            cover a large scope of topics pertaining to Christianity like the Gospels and Early Church.
          </p>
        </div>
        <br />
        <h2>video series</h2>
        <div className="resource-container">
          <a href="https://www.youtube.com/playlist?list=PLH0Szn1yYNedn4FbBMMtOlGN-BPLQ54IH" target="_blank">
            <img src={readbible} alt="How to read the Bible" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.youtube.com/playlist?list=PLH0Szn1yYNedn4FbBMMtOlGN-BPLQ54IH" target="_blank">
              <strong>How to read the Bible - Bible Project</strong>
            </a>{" "}
            is a video series that discusses how to properly tackle scripture.
          </p>
        </div>
        <div className="resource-container">
          <a href="https://www.youtube.com/playlist?list=PLH0Szn1yYNeclOdfwWBawnNT5ZkGFHxBf" target="_blank">
            <img src={wordstudy} alt="Word Study" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.youtube.com/playlist?list=PLH0Szn1yYNeclOdfwWBawnNT5ZkGFHxBf" target="_blank">
              <strong>Word Study - Bible Project</strong>
            </a>{" "}
            is a video series that focuses on specific words common in Christianity.
          </p>
        </div>
      </div>
    </Subpage>
  </Layout>
);

export default PodcastsPage;
