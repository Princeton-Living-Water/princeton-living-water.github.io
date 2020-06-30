import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import addCollapsible from "../js/collapsible.js";
import "../assets/styles.css";

const AboutPage = () => {
  useEffect(() => {
    addCollapsible();
  }, []);

  return (
    <Layout>
      <SEO title="About" />
      <Subpage>
        <a className="collapsible">
          <h3> what is living water? &#9660;</h3>
        </a>
        <p className="content">
          Living Water is just the Christians on the Princeton University campus who give out water bottles, some small
          snacks, and the Gospel during the hours people go out to the street. Living Water is named after Jesus Himself
          who is our living water (
          <a href="https://www.biblegateway.com/passage/?search=John+7%3A37-39&version=ESV" target="_blank">
            John 7:37 - 39
          </a>
          ,{" "}
          <a href="https://www.biblegateway.com/passage/?search=John+4%3A14&version=ESV" target="_blank">
            John 4:14
          </a>
          ).
        </p>
        <hr />
        <a className="collapsible">
          <h3> why do you guys do this? &#9660;</h3>
        </a>
        <p className="content">
          We do it because we want to be able to show the same love that we received from God to everyone! Christians
          have been called to be the light of Christ to the world (
          <a href="https://www.biblegateway.com/passage/?search=Matthew+5%3A13-16&version=ESV" target="_blank">
            Matthew 5:13-16
          </a>
          ) , and one of the ways we can do that is through sharing physical sustenance with others and by sharing the
          Gospel and the undeserved Grace of God with everyone.
        </p>
        <hr />
        <a className="collapsible">
          <h3> what is Christianity/the Gospel? &#9660;</h3>
        </a>
        <p className="content">
          Christianity is the belief and worship of the God of the Bible.
          <br />
          <br />
          We believe in a God who is perfect in every way who created the world to glorify Himself and for His creation
          to enjoy Him. Through His Word, God created mankind through Adam and Eve, giving mankind all they needed, and
          He was together with them. However, through the disobedient choice of Adam and Eve, sin entered the world, and
          we were separated from God. Because we were created to be with God, by being separated from Him, we were all
          dead in our sins.
          <br />
          <br />
          However, God, in His infinite love and grace, chose to send His Son, Jesus, who was God, to the world to live
          a perfect life as a man and to die on the cross for sinners’ sakes. In this way, He who had never sinned took
          on the consequences of sin, so that we may be considered righteous before God to be once again united with
          Him. Jesus resurrected on the third day and in Him we have the hope of our own resurrection and a life eternal
          with God when Jesus comes back one day.
          <br />
          <br />
          We believe that Christianity is more than following a set of actions or rules, but having a relationship with
          the LORD God. This relationship is available for those who accept and receive His grace through the belief in
          Jesus Christ as our lord and savior, and they will be called the sons and daughters of the living God of the
          universe.
        </p>
        <hr />
        <a href="/faq">
          <h3>frequently asked questions</h3>
        </a>
      </Subpage>
    </Layout>
  );
};

export default AboutPage;
