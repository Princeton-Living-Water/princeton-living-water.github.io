import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import addCollapsible from "../js/collapsible.js";
import "../assets/styles.css";

const AboutPage = () => {
  useEffect(() => {
    // 1. Initialize the collapsible functionality
    addCollapsible();

    // 2. Configure Logos RefTagger settings globally
    window.refTagger = {
      settings: {
        bibleVersion: "ESV", // Change to NIV, NASB, NKJV, KJV, etc.
        tooltipStyle: "light", // "light" or "dark"
      },
    };

    // 3. Inject the RefTagger script into the document header
    const script = document.createElement("script");
    script.src = "https://api.reftagger.com/v2/RefTagger.js";
    script.id = "reftagger-script";
    script.async = true;
    script.onload = () => {
      if (window.refTagger && typeof window.refTagger.tag === "function") {
        window.refTagger.tag();
      }
    };
    document.head.appendChild(script);

    // 4. Set up an observer to re-scan for verses when collapsibles are clicked
    const handleCollapsibleClick = () => {
      // Small timeout allows the content block to become visible before tagging
      setTimeout(() => {
        if (window.refTagger && typeof window.refTagger.tag === "function") {
          window.refTagger.tag();
        }
      }, 100);
    };

    // Attach click listeners to all your collapsible headers
    const elements = document.querySelectorAll(".collapsible");
    elements.forEach((el) => el.addEventListener("click", handleCollapsibleClick));

    // Cleanup script and event listeners when the component unmounts
    return () => {
      const scriptToRemove = document.getElementById("reftagger-script");
      if (scriptToRemove) scriptToRemove.remove();
      elements.forEach((el) => el.removeEventListener("click", handleCollapsibleClick));
    };
  }, []);

  return (
    <Layout>
      <SEO title="About" />
      <Subpage>
        <a className="collapsible">
          <h3> what is living water? &#9660;</h3>
        </a>
        <p className="content">
          Living Water is just a group of Christians on the Princeton University campus who give 
          out water bottles, some small snacks, and the Gospel during the hours people go out to the 
          street. Living Water is named after Jesus Himself who is our living water (John 7:37 - 39, John 4:14).
        </p>
        <hr />
        <a className="collapsible">
          <h3> why do you guys do this? &#9660;</h3>
        </a>
        <p className="content">
        We do it because we have experienced God's love and we want to be able to show the 
        same love that we received from God to everyone! Christians have been called to be 
        the light of Christ to the world (Matthew 5:13-16), and one of the ways we can do 
        that is through sharing physical sustenance with others and primarily by sharing 
        the gospel (good news) of grace, love, mercy, and truth of Jesus with everyone.
        </p>
        <hr />
        <a className="collapsible">
          <h3> what is Christianity/the Gospel? &#9660;</h3>
        </a>
        <p className="content">
          Christianity is the belief (Romans 10:9) and worship (Romans 12:1-2) of the God of the Bible.
          <br />
          <br />
          We believe in a God who is perfect in every way who created the world to demonstrate His glory and for His 
          creation to enjoy Him (Revelation 4:11). In the beginning, God created mankind through Adam and Eve, giving 
          mankind all they needed, and He was together with them. However, through the disobedience of Adam and Eve, 
          sin entered the world and into mankind, and we were separated from God. Because we were created to be with God, 
          by being separated from Him through our sin, the world became full with brokenness. God, being good and just, 
          must respond to our sin, thus justly condemning us to eternal punishment. We were all dead in our sins. (Ephesians 2:1-3)
          <br />
          <br />
          However, God, in His infinite love, mercy, and grace, chose to send His Son, Jesus, who was God, to the world 
          to live a perfect life as a man and to die on the cross to provide for sinners the way to eternal life. In this way, 
          He who had never sinned took on the consequences of sin, so that we who put our faith in Jesus alone may be considered 
          righteous before God to be once again united with Him (2 Corinthians 5:21). Jesus resurrected on the third day, 
          defeating death, and in Him we have the hope of our own resurrection and a life eternal with God when Jesus comes 
          back one day (Hebrews 9:28).
          <br />
          <br />
          We believe that Christianity is more than following a set of actions or rules, but having a restored relationship 
          with the LORD God that is lived out in a life of repentance (turning to God) (Joel 2:13). This relationship is 
          available for any who accept and receive His grace through the belief in Jesus Christ as our Lord and Savior, and 
          they will be called the sons and daughters of the living God of the universe (John 1:12).
        </p>
        <hr />
        <a href="/faq">
          <h3>frequently asked questions</h3>
        </a>
        <a href="/contact">
          <h3>reach out to any of us if you have any questions :)</h3>
        </a>
      </Subpage>
    </Layout>
  );
};

export default AboutPage;
