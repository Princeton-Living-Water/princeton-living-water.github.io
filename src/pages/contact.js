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
        <p> Or you can message us <a href="/chat">here</a>!</p>
        <a className="collapsible">
          <h4>Adam Liu ▼</h4>
        </a>
        <div className="content">
          <p>
            Adam grew up in the church, but for a long time, Adam found himself just going through the motions without really thinking about what it meant to follow Jesus. Over time, Adam came to realize that faith isn’t just about attending church or knowing the right answers, but about genuinely seeking to know God and building a personal relationship with Him. Adam is still growing in his faith, but he’s grateful for the ways God has been working in his life and for the opportunity to share God’s love with others through Living Water!
            <br />
            <br />
            Outside of that, Adam loves playing pickleball with friends and is always down for any word game!

            <br />
            <br />
            You can contact him at:
            <a href="mailto:adamliu@princeton.edu" className="contact">
              adamliu@princeton.edu
            </a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Brian Seo ▼</h4>
        </a>
        <div className="content">
          <p>
            Throughout many years of his life searching for meaning, Brian realized the simple truth that his greatest purpose of life was to know Jesus more deeply each day. After truly meeting Christ and finding his greatest joy in living for him, he couldn’t help but restart Living Water out of overflowing joy and desire for even more believers and non-believers to come to know this joy.
            <br />
            <br />
            You can contact him at: <a href="mailto:brian.seo@princeton.edu">brian.seo@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Dabie Isiofia ▼</h4>
        </a>
        <div className="content">
          <p>
            After spending years in pursuit of gratifying his own desires, Dabie learned that there is nothing that can satisfy the longing of his heart but Christ Jesus. He is still struck by the abundance of the love that the Lord has so freely given Him. After experiencing such a great love, he just seeks to do the will of his Father and share the love that changed his life with others.

            <br />
            <br />
            You can contact him at: <a href="mailto:di1200@princeton.edu">di1200@princeton.edu</a>
          </p>
          <br />
        </div>
        <a className="collapsible">
          <h4>Daniel Tu ▼</h4>
        </a>
        <div className="content">
          <p>
            Daniel’s existentialism made him realize that everything was meaningless and hopeless in a broken and seemingly nonsensical world — outside of the hope and truth found in Jesus Christ alone. He hopes to share the hope he's found with others who are familiar with hopelessness — to show them that through understanding the love, mercy, grace, and truth of Christ, one can have true Hope and find true meaning in the world — meaning and purpose not contrived by mankind's attempts at philosophizing and self-invention but found in the meaning that God Himself gave it.
            <br />
            <br />
            You can contact him at: <a href="mailto:daniel.tu@princeton.edu">daniel.tu@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Joann Amoako ▼</h4>
        </a>
        <div className="content">
          <p>
          Joann’s tendency to put her hope in people and find joy in relationships left her shattered when these temporary pleasures proved to be unreliable, unlike the steadfastness of the Man, Jesus Christ. Her heart’s desire is that many would come to a place of knowing the true Christ and Him crucified, through an unveiling and revealing of the Scriptures — that hearts would begin to burn, like a fire shut up in their bones, for Jesus, the Word who became flesh and dwelt among us.
            <br />
            <br />
            You can contact her at: <a href="mailto:amoakojoann@princeton.edu">amoakojoann@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Kaisha Brown ▼</h4>
        </a>
        <div className="content">
          <p>
            In her freshman year, God revealed to Kaisha the greatest truth of all: the gospel. Since then, her time at Princeton has been marked by countless reminders of Christ’s grace, faithfulness, and abundant love. Having experienced the hope and joy found in Christ, Kaisha joined Living Water with a desire to share the gospel with others and to help others encounter the same love that has transformed her life.

            <br />
            <br />
            You can contact her at: <a href="mailto:kb9972@princeton.edu">kb9972@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Michael Njoku ▼</h4>
        </a>
        <div className="content">
          <p>
            Michael found that the Bible spoke all-encompassing truth: about the world in its brokenness, about mankind and its endless search for meaning, and most importantly, about God—the Almighty and Holy Creator of the world who deeply cares for His creation. After realizing that God performed the greatest act of love in the sacrifice of His Son, Jesus Christ, for the forgiveness of the world’s sins, Michael believed in Him, so grateful for the opportunity to know Him, love Him, glorify Him, and enjoy Him forever.

            <br />
            <br />
            You can contact him at: <a href="mailto:mn2602@princeton.edu">mn2602@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Nadia McBeth ▼</h4>
        </a>
        <div className="content">
          <p>
            Nadia’s most impactful introduction to Christianity was reading the Gospel of John. She was moved by the notion of a God who humbled Himself to pursue us and our salvation. Now pursuing Him is the greatest privilege of her life. She came to know Jesus’ love is profound and He makes life meaningful. It’s crazy how awesome life is when selfish desires and motivations are no longer at the center.
            <br />
            <br />
            You can contact her at: <a href="mailto:nm1540@princeton.edu">nm1540@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Rylie Heaton ▼</h4>
        </a>
        <div className="content">
          <p>
            For years Rylie has loved discussing anything having to do with religion and theology. These abstract thoughts used to be the only way she interacted with her faith, but God has since shown her that there is an unmatched joy and utter fulfillment to be found in a life lived actively for Jesus. Knowledge of God is not the same as love for God, and it is for the beauty and life-saving power of that distinction that she wants to share the good news.
            <br />
            <br />
            You can contact her at: <a href="mailto:rh5482@princeton.edu">rh5482@princeton.edu</a>
          </p>
        </div>
        <a className="collapsible">
          <h4>Vincent Stone ▼</h4>
        </a>
        <div className="content">
          <p>
            Vincent didn’t grow up Christian, but became one when he realized the magnitude of love and the depth of truth contained in God’s word. Being a person who was raised to take matters into his own hands, learning about God has made him realize that God is completely sovereign over our lives, and that we live best when we realize our true dependence on Him in every moment. God has taught Vincent to take joy in His will and to trust God’s plan for the world.
            <br />
            <br />
            You can contact him at: <a href="mailto:vincentmstone@princeton.edu">vincentmstone@princeton.edu</a>
          </p>
        </div>
      </Subpage>
    </Layout>
  );
};
export default ContactPage;