import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

const FAQPage = () => {
  useEffect(() => {
  }, []);

  return (
    <Layout>
      <SEO title="Chat Info" />
      <Subpage>
        <span className="learn-more"> <a href="/chat/login">Click here</a> to start chatting! </span>
        <h3>What is Living Water Chat?</h3>
        <div className="about-chat">
          <p>This is a place to get clear and cogent explanations to questions on anything pertaining to the Christian faith and worldview from fellow Princeton students. We will genuinely try to give satisfactory answers! Our aim is not to give a random opinion - we try to provide careful explanations that represent Christian orthodoxy as revealed in Scripture. We also promise to not avoid your questions or shy away from more controversial topics if asked. We would rather you disagree but have a truthful picture of our Christianity than paint a sugar-coated misconception.</p>
        </div>
        <h3> How does it work?</h3>
        <div className="about-chat">
          <p>Once you make an account, you’ll be able to converse with us. Think of this as a mix between an informal chat and a discussion forum. No need to reply immediately! We want to give you time to think about and process what’s being discussed. Also, as fellow Princeton students, we can’t promise to respond immediately, so conversations will probably be on and off. Remember you can always log back in and check for replies!</p>
          <p>You have the option to make everything anonymous on your end but will always have access to our contact info. We think this promotes genuine dialogue since you’ll feel comfortable saying whatever is on your mind. Even your username is hashed before we store it in our database. If you lose your username or password, feel free to make a new account!</p>
        </div>
        <h3> Who is this chat for?</h3>
        <div className="about-chat">
            <p>Anyone can use this chat! This includes...</p>
            <ul>
                <li>the person curious about faith but hesitant to jump into Christian communities,</li>
                <li>the person who is confused why Christians would ever believe in xyz, </li>
                <li>the student who secretly just wants a perspective for their class, </li>
                <li>the ex-Christian who left the faith because of cognitive dissonance and hypocrisy in the church,</li>
                <li>the person struggling through life and constantly hearing about some life-transforming “hope” of Christ,</li>
                <li>the person who likes to mess around anonymously and say hi,</li>
                <li>the Christian who always had some lingering confusions over the years, </li>
                <li>or even the person who honestly doesn’t care about religion but just wants to stop by and see whether this chat thing could possibly have anything convincing or new to say. </li>
            </ul>
        </div>
        <h3> About Us</h3>
        <div className="about-chat">
          <p>
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
          <p>
          We aren’t claiming to be experts, but we can share helpful thoughts on a variety of topics: the Gospel, the Bible, theological doctrine, church history, philosophy, or just Christian faith in daily life!
          </p>
          <p> You can contact and learn more about us <a href="/contact">here</a>!</p>
        </div>
      </Subpage>
    </Layout>
  );
};

export default FAQPage;
