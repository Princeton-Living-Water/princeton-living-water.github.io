import React, { useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";
import { useStaticQuery, graphql } from "gatsby";

import addCollapsible from "../../js/collapsible.js";
import { navigate } from "../../js/utils.js";

import "../../assets/styles.css";
import "../../assets/devos.css";

const DevosPage = ({ pageContext }) => {
  const data = useStaticQuery(
    graphql`
      query DevoPageQuery {
        allFile(filter: { sourceInstanceName: { eq: "devos" } }) {
          edges {
            node {
              internal {
                content
              }
              name
            }
          }
        }
      }
    `
  );

  // Set day number
  let { day } = pageContext;
  const numDevos = data.allFile.edges.length;
  if (!day) {
    navigate(`/resources/devos/day${numDevos}`);
  } else if (day < 1 || day > numDevos) {
    throw Error("Whoops");
  }

  // Parse devo text and place into an object
  const parseText = text => {
    let devo = {};
    let lines = text.split(/\r?\n/).filter(x => x !== "");
    let start = lines.findIndex(x => x.startsWith("***"));
    let end = lines.lastIndexOf("Consider");

    devo["title"] = lines[0];
    devo["date"] = lines[1];

    if (start < 0) {
      devo["passage"] = "";
      devo["content"] = lines.slice(2);
      devo["questions"] = "";
    } else {
      devo["passage"] = lines.slice(2, start);
      devo["content"] = lines.slice(start + 1, end);
      devo["questions"] = lines.slice(end + 1);
    }

    return devo;
  };

  // Create a DOM element of paragraphs given an array of lines
  const linesToElem = lines => {
    let elem = document.createElement("div");
    for (const l of lines) {
      if (l === "###") {
        let node = document.createElement("hr");
        elem.appendChild(node);
      } else {
        let node = document.createElement("p");
        node.appendChild(document.createTextNode(l));
        elem.appendChild(node);
      }
    }

    return elem;
  };

  // Fill in current devo
  const renderDevo = day => {
    let devoBox = document.getElementById("devo-box");
    devoBox.innerHTML = "";

    const devoName = `day${day}`;
    const devoContent = data.allFile.edges.find(node => node.node.name === devoName).node.internal.content;

    let devo = parseText(devoContent);

    let header = document.createElement("h3");
    let headerHTML = devo["date"] + "<br/>" + devo["title"];
    header.innerHTML = headerHTML;
    header.classList.add("devo-header");

    let passage = linesToElem(devo["passage"]);
    let instruction1 = document.createElement("div");
    instruction1.innerHTML =
      "<p><em>Please read the verses and pray through it before reading our own takes.</em></p> <hr/>";
    let content = linesToElem(devo["content"]);
    let instruction2 = document.createElement("div");
    instruction2.innerHTML = "<hr/> <p><em>Consider</em></p>";
    let questions = linesToElem(devo["questions"]);

    // Append all elements to the devo box
    devoBox.appendChild(header);
    if (devo["passage"] !== "") {
      devoBox.appendChild(passage);
      devoBox.appendChild(instruction1);
    }
    devoBox.appendChild(content);
    if (devo["questions"] !== "") {
      devoBox.appendChild(instruction2);
      devoBox.appendChild(questions);
    }
  };

  useEffect(() => {
    addCollapsible();
    renderDevo(day);
  });

  const prevDevo = () => {
    if (day > 1) navigate(`/resources/devos/day${day - 1}`);
  };

  const nextDevo = () => {
    if (day < numDevos) navigate(`/resources/devos/day${day + 1}`);
  };

  const prevButtonClass = day === 1 ? "disabled" : "";
  const nextButtonClass = day === numDevos ? "disabled" : "";

  return (
    <Layout>
      <SEO title="Devos" />
      <Subpage>
        <h2> daily devotionals </h2>
        <a className="collapsible">
          <h3> disclaimer &#9660; </h3>
        </a>
        <div className="content">
          <p>
            Handa and the Hooligans (Joe and Sam) were studying Ephesians together and wanted to share what they learned
            with all of you, in the form of devotionals.
          </p>
          <p>
            Please do not just blindly accept our word as true, but examine everything we say with the Bible. Please
            know that we have not been to seminary or have received any formal training. However, these devotionals were
            not prepared carelessly but rather with much mediation and study. As one part of the Body at Princeton (now
            dispersed), being able to study the same part of the Bible together is an opportunity for us to grow
            together.
          </p>
        </div>
        <div id="devo-box"></div>
        <div className="nav-buttons">
          <div className="devo-button">
            <a id="prev-button" onClick={prevDevo} className={prevButtonClass}>
              &#8592; Prev
            </a>
          </div>
          <div className="devo-button">
            <a id="next-button" onClick={nextDevo} className={nextButtonClass}>
              Next &#8594;
            </a>
          </div>
        </div>
      </Subpage>
    </Layout>
  );
};

export default DevosPage;
