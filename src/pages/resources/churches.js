import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";
import addCollapsible from "../../js/collapsible";

const ChurchesPage = () => {
  useEffect(() => {
    addCollapsible();
  }, []);

  return (
    <Layout>
      <SEO title="Churches" />
      <Subpage>
        <h2> churches </h2>
        <a className="collapsible">
          <h3> hope presbyterian church &#9660;</h3>
        </a>
        <div className="content">
          A gospel-centered, Presbyterian church.
          <ul>
            <li>Unfortunately, all church services temporarily suspended due to COVID-19.</li>
            <li>
              Check out their{" "}
              <a href="https://www.hopechurch-nj.org" target="_blank">
                website
              </a>
              .
            </li>
            <li>
              Also, make sure to check out their wonderful prerecorded{" "}
              <a href="https://www.hopechurch-nj.org/sermons" target="_blank">
                sermons
              </a>
              !
            </li>
          </ul>
        </div>
        <hr />
        <a className="collapsible">
          <h3> grace community chapel (gcc) &#9660;</h3>
        </a>
        <div className="content">
          A gospel-centered, Bible-driven church.
          <ul>
            <li>
              Check out their{" "}
              <a href="https://gccnj.org" target="_blank">
                website
              </a>
              .
            </li>
            <li>Virtual Service Times are on Sundays at 2:00 PM Eastern Time (US and Canada).</li>
            <li>
              Access their live virtual service{" "}
              <a href="https://www.youtube.com/channel/UCdFoOKXmhqfd0gtJ5qbZCVg" target="_blank">
                here
              </a>
              .
            </li>
            <li>
              GCC has their virtual Tuesday Night Prayer weekly at 8PM. Join{" "}
              <a href="https://www.youtube.com/gccnj" target="_blank">
                here
              </a>
              !
            </li>
          </ul>
        </div>
        <hr />
        <a className="collapsible">
          <h3> princeton christian church (pcc) &#9660;</h3>
        </a>
        <div className="content">
          A gospel-centered, bi-lingual church.
          <ul>
            <li>
              Check out their{" "}
              <a href="http://www.princetonchristianchurch.org" target="_blank">
                website
              </a>
              .
            </li>
            <li>Virtual Service Times are on Sundays at 11:45 AM Eastern Time (US and Canada).</li>
            <li>
              Access their live Zoom service{" "}
              <a href="https://zoom.us/j/995911114" target="_blank">
                here
              </a>
              .
            </li>
          </ul>
        </div>
        <br />
        <h2> fellowships </h2>
        <a className="collapsible">
          <h3> manna christian fellowship &#9660;</h3>
        </a>
        <div className="content">
          An evangelical, inter-denominational Christian Fellowship committed to the reality that the death,
          resurrection, and glory of Christ changes everything. Their main events include:
          <ul>
            <li>
              {" "}
              Manna Small Groups - small groups involve prayer, fellowship, and open discussions centered on Biblical
              passages.{" "}
            </li>
            <ul>
              <li>
                {" "}
                Senior Small Group (SSG) - Mondays 8-9:30 pm EST at this Zoom{" "}
                <a href="https://princeton.zoom.us/j/639299269" target="_blank">
                  link
                </a>{" "}
              </li>
              <li>
                {" "}
                Junior Small Group (SSG) - Wednesdays 8-9:30 pm EST at this Zoom{" "}
                <a href="https://zoom.us/j/906987795" target="_blank">
                  link
                </a>{" "}
              </li>
              <li> Sophomore Small Group (SoSG) - Thursdays 7-8 pm EST at Zoom link TBD </li>
              <li>
                {" "}
                Freshman Small Group (FSG) - Thursdays 6-7:30 pm EST at this Zoom{" "}
                <a href="https://princeton.zoom.us/j/220144075" target="_blank">
                  link
                </a>{" "}
              </li>
            </ul>
            <li>
              {" "}
              Manna Large Group - A time of virtual worship and prayer and a gospel-driven message. Held each Saturday
              at 7:30 pm Eastern Time (US and Canada) at this Zoom{" "}
              <a href="https://princeton.zoom.us/j/169047159" target="_blank">
                link
              </a>{" "}
            </li>
          </ul>
          Check out their{" "}
          <a href="https://manna.princeton.edu" target="_blank">
            website
          </a>
          .
        </div>
        <hr />
        <a className="collapsible">
          <h3> princeton christian fellowship (pcf) &#9660;</h3>
        </a>
        <div className="content">
          A non-denominational Christian campus ministry dedicated to teaching, serving, and building up students to
          live and love like Christ on Princeton's campus. Their main events include:
          <ul>
            <li> PCF Bible Study - Group and individual one-on-one Bible studies take place weekly. </li>
            <li>
              {" "}
              PCF Friday Night Fellowship (FNF) - Large group worship gathering held every Friday at 7:30 pm Eastern
              Time (US and Canada).{" "}
            </li>
          </ul>
          Check out their{" "}
          <a href="http://pcfprinceton.org" target="_blank">
            website
          </a>
          .
        </div>
        <hr />
        <a className="collapsible">
          <h3> nova &#9660;</h3>
        </a>
        <div className="content">
          An evangelical, inter-denominational Christian Fellowship committed to the reality that the death,
          resurrection, and glory of Christ changes everything. Their main events include:
          <ul>
            <li>
              {" "}
              NOVA Bible Courses - In-depth group Bible study where students grow together in their knowledge of Jesus
              Christ. Weekly meeting for an hour and a half.{" "}
            </li>
            <li>
              {" "}
              NOVA Encounter - Christian leadership development lecture series which involves high-powered worship,
              world-class speakers, and great fellowship. Held each Friday at 8:00 pm Eastern Time (US and Canada).{" "}
            </li>
          </ul>
          Check out their{" "}
          <a href="http://encounternova.squarespace.com" target="_blank">
            website
          </a>
          .
        </div>
      </Subpage>
    </Layout>
  );
};

export default ChurchesPage;
