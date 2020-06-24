import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";
import addCollapsible from "../js/collapsible";

const ContactPage = () => {
  useEffect(() => {
    addCollapsible();
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />
      <Subpage>
        <h2> contact us if you want to talk! </h2>
        <a className="collapsible">
          <h4>Handa Chun -- chief old man &#9660;</h4>
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
          <h4>Joe Chen -- caregiver to old man &#9660;</h4>
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
          <h4>Tracie Kwon &#9660;</h4>
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
          <h4>Allen Park &#9660;</h4>
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
          <h4>Grace Wang &#9660;</h4>
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
          <h4>Fisayo Adeyina &#9660;</h4>
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
          <h4>Justin Chang -- tech boy &#9660;</h4>
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
      </Subpage>
    </Layout>
  );
};
export default ContactPage;
