import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";
import addCollapsible from "../js/collapsible";

const ContactPage = () => {
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
      <SEO title="Contact" />
      <Subpage>
        <h2> contact us if you want to talk! </h2>
        <p> Or you can chat with us <a href="/chat">here</a>!</p>
        <a className="collapsible">
          <h4>Joe Chen ▼</h4>
        </a>
        <div className="content">
          <p>
            God taught Joe a simple but awesome truth as a freshman: without Christ, he has nothing, yet with Christ
            there is joy in everything! It took Joe a while to realize what that meant, but God convinced him that it
            was true. Filled and overflowing with joy, Joe joined Living Water because he wants everyone to know Gospel
            is so worth it.
            <br />
            <br />
            You can contact him at:
            <a href="mailto:jc84@princeton.edu" className="contact">
              jc84@princeton.edu
            </a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Tracie Kwon ▼</h4>
        </a>
        <div className="content">
          <p>
            Tracie used to shy away from evangelizing because she was ashamed of the Gospel. However, after God revealed
            to her how amazing and life-changing His Good News is, she couldn't help but feel an urgency to share with
            those close to her on campus. She joined Living Water on its first day, Dean's Date 2020, to point others to
            Jesus Christ, her Lord and Savior.
            <br />
            <br />
            You can contact her at: <a href="mailto:ttkwon@princeton.edu">ttkwon@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Allen Park ▼</h4>
        </a>
        <div className="content">
          <p>
            Allen joined Living Water after hearing about an opportunity to share the gospel with other students on
            campus. After participating in the initiative for the first couple of weeks, Allen saw the urgent need for
            the gospel on campus and wanted to help out in any way he can.
            <br />
            <br />
            You can contact him at: <a href="mailto:allenp@princeton.edu">allenp@princeton.edu</a>
          </p>
          <br />
        </div>
        <a className="collapsible">
          <h4>Grace Wang ▼</h4>
        </a>
        <div className="content">
          <p>
            Throughout her freshman and sophomore year, Grace Wang has been in hiding. But the Gospel is so powerful and
            so good that even Grace Wang cannot remain in the confines of her room - she cannot help but go out to
            evangelize on Saturday nights, the one time you might see her.
            <br />
            <br />
            You can contact her at: <a href="mailto:gw17@princeton.edu">gw17@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Fisayo Adeyina ▼</h4>
        </a>
        <div className="content">
          <p>
            Fisayo's first week at Living Water, she was surprised to encounter people curious enough to have a
            conversation about Jesus in the freezing cold! The harvest is surely ready, and God just needs more
            laborers. She wants to be one of them.
            <br />
            <br />
            You can contact her at: <a href="mailto:oadeyina@princeton.edu">oadeyina@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Justin Chang ▼</h4>
        </a>
        <div className="content">
          <p>
            Throughout his time at Princeton, God has reminded Justin in countless ways that He is good and His love is
            great. Because of this, Justin joined Living Water his junior year, so that he could help spread the joy and
            peace he’s been able to find in Jesus.
            <br />
            <br />
            You can contact him at: <a href="mailto:jc79@princeton.edu">jc79@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Richard Zhu ▼</h4>
        </a>
        <div className="content">
          <p>
            Throughout his life, Richard has grown in his relationship with God from first meeting him through an illustrated Bible in daycare. One thing that’s resonated time and again is to let things happen in God’s own time and to not stress out too much about things
            <br />
            <br />
            You can contact him at: <a href="mailto:ryzhu@princeton.edu">ryzhu@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Handa -- alumni ▼</h4>
        </a>
        <div className="content">
          <p>
            Handa is just a dude trying to share the Gospel.
            <br />
            Handa first started Living Water in his junior year when he decided to buy some water bottle to hand out to
            people on the Street so that he can share the Gospel. He wasn't being original or anything -- he copied the
            idea from his friend from Cambridge, England. Since then, Living Water has grown and does a bit more than
            that. He's excited to see how much more God will use it for His Kingdom work.
            <br />
            <br />
            You can contact him at: <a href="mailto:hchun@princeton.edu">hchun@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Brian Seo ▼</h4>
        </a>
        <div className="content">
          <p>
            Throughout many years of his life searching for meaning, Brian realized the simple truth that his greatest purpose of life was to know Jesus more deeply each day. After truly meeting Christ and finding his greatest joy in living for him, he couldn’t help but restart living water out of overflowing joy and desire for even more believers and non-believers to come to know this joy
            <br />
            <br />
            You can contact him at: <a href="mailto:brian.seo@princeton.edu">brian.seo@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Daniel Tu ▼</h4>
        </a>
        <div className="content">
          <p>
          Daniel’s existentialism made him realize that everything was meaningless and hopeless in a broken and seemingly nonsensical world &mdash; outside of the hope and truth found in Jesus Christ alone. He hopes to share the hope he's found with others &mdash; to show them that through understanding the love, mercy, grace, and truth of Christ, one can have true Hope and find true meaning in the world &mdash; meaning and purpose not contrived by mankind's attempts at philosophizing and self-invention but found in the meaning that God Himself gave it.
            <br />
            <br />
            You can contact him at: <a href="mailto:dt2225@princeton.edu">daniel.tu@princeton.edu</a>
          </p>
        </div>
      </Subpage>
    </Layout>
  );
};
export default ContactPage;