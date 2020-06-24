import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Subpage from "../../../components/subpage";

import "../../../assets/styles.css";

const LearnToPrayPage = () => (
  <Layout>
    <SEO title="Learn to Pray" />
    <Subpage>
      <div class="article">
        <h2>Learn to Pray</h2>
        <p>
          Are you curious about how to pray, or do you wonder "Does God exist? How can I ask him about things or make
          requests from him? Why is my life or the world the way it is?" Maybe you've never prayed before, or maybe
          you'd like to explore new ways of praying! We'll be happy to guide you through prayer in a way that's
          contemplative while accessible.
        </p>
        <br />
        <h3>What will it look like?</h3>
        <ol>
          <li>leader will give an explanation of what prayer is</li>
          <li>read a passage from the Bible together</li>
          <li>
            learn the basic principles on how to meditate on the Bible, and learn how to start praying based on what we
            read
          </li>
          <li>pray together -- leader prays out loud, and participants follow</li>
          <li>share prayer requests</li>
        </ol>
        <br />
        <h3>Zoom links:</h3>
        <p>
          Monday 5:00 - 6:00 PM -- <a href="https://princeton.zoom.us/j/935145901">with Jinn Park '21</a>
          <br />
          Wednesday 5:00 - 6:00 PM -- <a href="https://zoom.us/j/450303036">with Brandon Joa '18</a>
        </p>
      </div>
    </Subpage>
  </Layout>
);

export default LearnToPrayPage;
