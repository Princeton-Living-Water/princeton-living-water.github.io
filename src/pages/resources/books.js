import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Subpage from "../../components/subpage";

import "../../assets/styles.css";

import desiringgod from "../../assets/img/desiringgod.jpg";
import knowinggod from "../../assets/img/knowinggod.jpg";
import whoisjesus from "../../assets/img/whoisjesus.jpg";
import merechristianity from "../../assets/img/merechristianity.jpg";
import reasonforgod from "../../assets/img/reasonforgod.png";

const BooksPage = () => (
  <Layout>
    <SEO title="Books" />
    <Subpage>
      <div className="article">
        <h2>books</h2>
        <div className="resource-container">
          <a href="https://www.desiringgod.org/books/all" target="_blank">
            <img src={desiringgod} alt="Desiring God Books" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.desiringgod.org/books/all" target="_blank">
              <strong>Free Books (Ebooks) by Desiring God</strong>
            </a>
            contain tens of books that are free to download and also previews of great books that you may want to read
            as well! Buy them if you want a hard copy. Particularly,{" "}
            <a
              href="https://www.desiringgod.org/books/coronavirus-and-christ"
              target="_blank"
              style={{ color: "purple" }}
            >
              <strong>Coronavirus and Christ</strong>
            </a>{" "}
            may be an interesting book to read!
          </p>
        </div>
        <div className="resource-container">
          <a href="https://www.amazon.com/Knowing-God-J-I-Packer-ebook/dp/B006NZ66RC" target="_blank">
            <img src={knowinggod} alt="Knowing God" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.amazon.com/Knowing-God-J-I-Packer-ebook/dp/B006NZ66RC" target="_blank">
              <strong>Knowing God</strong>
            </a>
            is a book that talks about the attributes of the Christian God and how a Christian ought to live if he
            claims to know this God.
          </p>
        </div>
        <div className="resource-container">
          <a href="https://www.amazon.com/Who-Jesus-9Marks-Greg-Gilbert/dp/1433543508" target="_blank">
            <img src={whoisjesus} alt="Who is Jesus?" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.amazon.com/Who-Jesus-9Marks-Greg-Gilbert/dp/1433543508" target="_blank">
              <strong>Who is Jesus?</strong>
            </a>
            is a book that shares the most central person of our faith -- Jesus.
          </p>
        </div>
        <div className="resource-container">
          <a href="http://www.samizdat.qc.ca/vc/pdfs/MereChristianity_CSL.pdf" target="_blank">
            <img src={merechristianity} alt="Mere Christianity" className="resourcelogo" />
          </a>
          <p>
            <a href="http://www.samizdat.qc.ca/vc/pdfs/MereChristianity_CSL.pdf" target="_blank">
              <strong>Mere Christianity</strong>
            </a>
            is an apologetic look at Christianity with a strong defense from philosophy and society. Linked is a pdf
            version of the book -- to buy:{" "}
            <a
              href="https://www.amazon.com/Christianity-Signature-Classic-12-Apr-2012-Paperback/dp/B011T6WWBI"
              target="_blank"
            >
              click here
            </a>
            .
          </p>
        </div>
        <div className="resource-container">
          <a href="https://www.amazon.com/Reason-God-Belief-Age-Skepticism-ebook/dp/B000XPNUZE" target="_blank">
            <img src={reasonforgod} alt="Reason For God" className="resourcelogo" />
          </a>
          <p>
            <a href="https://www.amazon.com/Reason-God-Belief-Age-Skepticism-ebook/dp/B000XPNUZE" target="_blank">
              <strong>The Reason for God by Tim Keller</strong>
            </a>
            is a fantastic book.
          </p>
        </div>
      </div>
    </Subpage>
  </Layout>
);

export default BooksPage;
