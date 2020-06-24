import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";
import addCollapsible from "../../js/collapsible";

const HandSaniPage = () => {
  useEffect(() => {
    addCollapsible();
  }, []);

  return (
    <Layout>
      <SEO title="Hand Sanitizer" />
      <Subpage>
        <h3> what are you guys doing?</h3>
        <p class="article">
          We, the Christian students on campus, collected money together and got donations from the alumni to construct
          goody bags with a small bottle of water, some candy and a hand sanitizer.
          <br />
          <br />
          We want to make sure that you guys know that you are not alone in this and that we are praying for you guys as
          well. Along with the goody bag will come a pamphlet containing resources and information about God and also
          this website link.
          <br />
          <br />
          If not already, please sign up for one here:{" "}
          <a style={{ color: "red" }} href="https://forms.gle/n44HvYuNuxYodaee9" target="_blank">
            Hand Sanitizer Gifts Sign Up
          </a>
        </p>
        <h3> how are you staying safe? </h3>
        <p class="article">
          First of all, we will be following the school's safety guidelines that tell us not to get in contact with each
          other. We will be delivering the packages to your doors, but will not be touching anything in the process
          (this includes your doors, so we will not knock at your door -- instead we will message you guys).
          <br />
          <br />
          All of the packaging will be done with gloves and the ziploc bags they come in will be decontaminated after
          stuffed and will be handled only with gloved hands. We will be wearing masks as well during the entire process
          including delivery.
          <br />
          <br />
          We ask that you guys message us if you want any specific details for delivery as we will try to meet those
          needs. You can email us at: hello (at) princetonlivingwater.org
        </p>
        <hr />
      </Subpage>
    </Layout>
  );
};

export default HandSaniPage;
