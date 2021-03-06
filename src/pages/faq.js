import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";
import addCollapsible from "../js/collapsible";

const FAQPage = () => {
  useEffect(() => {
    addCollapsible();
  }, []);

  return (
    <Layout>
      <SEO title="" />
      <Subpage>
        <a className="collapsible">
          <h3> what is Christianity/the Gospel? &#9660;</h3>
        </a>
        <p className="content">
          Christianity is the belief and worship of the God of the Bible.
          <br />
          <br />
          We believe in a God who is perfect in every way who created the world to glorify Himself and for His creation
          to enjoy Him. Through His Word, God created mankind through Adam and Eve, giving mankind all they needed, and
          He was together with them. However, through the disobedient choice of Adam and Eve, sin entered the world, and
          we were separated from God. Because we were created to be with God, by being separated from Him, we were all
          dead in our sins.
          <br />
          <br />
          However, God, in His infinite love and grace, chose to send His Son, Jesus, who was God, to the world to live
          a perfect life as a man and to die on the cross for sinners’ sakes. In this way, He who had never sinned took
          on the consequences of sin, so that we may be considered righteous before God to be once again united with
          Him. Jesus resurrected on the third day and in Him we have the hope of our own resurrection and a life eternal
          with God when Jesus comes back one day.
          <br />
          <br />
          We believe that Christianity is more than following a set of actions or rules, but having a relationship with
          the LORD God. This relationship is available for those who accept and receive His grace through the belief in
          Jesus Christ as our lord and savior, and they will be called the sons and daughters of the living God of the
          universe.
        </p>
        <hr />
        <a className="collapsible">
          <h3> who is God? &#9660;</h3>
        </a>
        <div className="content">
          <p>God is loving and He is just. God is holy and perfect.</p>
          <p>God created all things and is the sustainer of life. God is sovereign and in control of all things.</p>
          <p>God is infinite, eternal, and unchanging.</p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> why do I have to believe? &#9660;</h3>
        </a>
        <div className="content">
          <p> We have to believe because we were originally created to believe in God and to live in union with God.</p>

          <p>
            We have all seen suffering and trouble that seem to point to how the world is broken. When we view this
            broken world, we come to wonder why it is so, and think if there may be something better. Christians believe
            that people have this kind of mindset, and a desire to seek something better, because truly, we were created
            to be somewhere better, and to be with someone better. We believe that the world was created to be in
            paradise, and to be with God.
          </p>
          <p>
            We, all of humanity, must believe, because that was what we were originally created for — we will not be
            accomplishing our primary objective if we do not worship Him who created us because that was what we were
            created for. God is glorified when we are satisfied in Him.
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> why can’t everyone just be saved? &#9660;</h3>
        </a>
        <div className="content">
          <p>
            We believe in a God who is good and just. As such, God cannot just turn a blind eye to our sin and
            disobedience. Our sinful nature separates us from God: because He is perfect in all ways and we are not, our
            sin prevents us from being accepted by God. The just punishment for our rebellion against God is an eternity
            of separation from God after death.
          </p>
          <p>
            This is where the need to be saved comes in: the good news is that God made a way for us to be saved through
            his Son Jesus. However, an important step in being saved is to recognize the need for a savior, but
            unfortunately in today’s world, many people do not acknowledge this. God loves all of us, even if we reject
            Him, and because of this, He gives us a choice and does not force us into his presence. Salvation is a free
            gift for those who recognize their helplessness due to sin and trust in Jesus as the only one who can save.
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> how do I know Christianity is true? &#9660;</h3>
        </a>
        <div className="content">
          <p>
            Whether we realize it or not, we all hold unprovable basic beliefs that are ingrained within our psychology:
          </p>
          <ul>
            <li>Beliefs about the universe (you exist, life has meaning, cause and effect exists)</li>
            <li>Beliefs about knowledge (logic is reliable, memory is reliable, your senses are reliable)</li>
            <li>Beliefs about ethics (human beings have value, Love and Justice are real)</li>
          </ul>
          <p>
            These beliefs are presuppositions and the foundation upon which we form all other beliefs. Humans have
            different models for where we derive these beliefs from. They help us figure out what is True. These models
            explain who we are and what our purpose is. Some models Princetonians follow are secular humanism or
            naturalism.
          </p>
          <p>
            {" "}
            Christians believe in the model of Christianity. Christians believe that our basic beliefs are a result of
            us being made in the likeness of our Creator God. As a result, these beliefs come from a God-given
            conscience within us which leads us towards the purpose we were created for: glorifying our Creator and
            enjoying Him. The Bible states that this God-given conscience causes all of us to “clearly perceive'' that
            Christianity <strong>best and perfectly explains</strong> our reality.
          </p>
          <p>
            Ultimately, it is epistemologically impossible to show that any model is provably true. In fact, all people
            live by and rely on some unproven model, and this reliance is what Christians call
            <strong>faith</strong>. But, Christians place their faith in the model of Christainity because, as C.S.
            Lewis puts it, “I believe in Christianity as I believe that the sun has risen: not only because I see it,
            but because by it I see everything else.” Why Chrisitanity is the closest description of reality compared to
            all other models is something we would love to discuss with you.
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> how is Christianity different from other religions? &#9660;</h3>
        </a>
        <div className="content">
          <p>
            Christianity says that earning your way to God is an impossible task. God is infinitely Holy and Perfect
            that we in our sinfulness cannot do anything to get closer to Him. Although our sin separates us from God,
            He extends His grace (undeserved free gift) to us through his Son, Jesus Christ. If you accept Jesus as your
            Lord and Savior, He gives you new life in Him.
          </p>

          <p>
            In Christianity, our relationship with God isn’t through the rules we follow. It is through the shed blood
            of Jesus Christ that God offers a personal relationship with Him. God knows you fully and loves the world
            and wants you to know Him and to love Him as well.
          </p>

          <p>
            Ephesians 2:8-9 says, “For by grace you have been saved through faith. And this is not your own doing; it is
            the gift of God, not a result of works, so that no one may boast.”
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> why can’t I just repent before I die? &#9660; </h3>
        </a>
        <div className="content">
          <p>
            If you could have the greatest treasure in the world, why would you wait to have it? The Gospel isn’t just
            an accessory that we can acquire through something we do and then not face eternal suffering.
          </p>
          <p>
            If the Gospel is truly as valuable as we claim it to be, the Gospel should be the center of our lives: “The
            kingdom of heaven is like treasure hidden in a field, which a man found and covered up. Then in his joy he
            goes and sells all that he has and buys that field. Again, the kingdom of heaven is like a merchant in
            search of fine pearls, who, on finding one pearl of great value, went and sold all that he had and bought
            it.” - Matthew 13:44-46
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> how do I become Christian? &#9660; </h3>
        </a>
        <div className="content">
          <p>
            It is not a matter of the actions you do yourself that makes you a Christian. Everything that we do stems
            from a realization that an omniscient, omnipotent, omnipresent God loved us so much that he would come down
            as a human to take the suffering we deserve so that everyone, even those persecuting and humiliating him,
            could have the opportunity to be with him.
          </p>
          <p>
            Thus, the way one should approach becoming a Christian is by first realizing what kind of a God the
            Christian God is and in the light of such a magnificent truth, coming to recognize how sinful we are.
          </p>
          <p>
            As Isaiah 64:6 says: “All of us have become like one who is unclean, and all our righteous acts are like
            filthy rags; we all shrivel up like a leaf, and like the wind our sins sweep us away.” It is at this point
            we come to recognize and realize that we have been saved from our own sins and inability to meet the
            standards — at this moment we come to see that God has sent us the Messiah, Jesus who is God who has paid
            the price for us.
          </p>
          <p>
            All we need to do is to believe in this Messiah and to cry out to Him for our salvation. Those who put their
            trust in the one God and recognize Jesus as our savior are whom we call Christians.
          </p>
        </div>
        <hr />
        <a className="collapsible">
          <h3> Do Christians ignore the parts of the Bible that they don’t feel are right? &#9660; </h3>
        </a>
        <div className="content">
          <p>
            God’s Word is perfect and true, and there are no bad or incorrect parts. Perhaps this question refers to the
            parts which make us feel bad. Despite popular belief to the contrary, Christianity is not a feel-good
            religion. You have to feel bad about yourself, a sinner and enemy of God, in order to accept your need for
            salvation in Jesus Christ. Also, all of the death, rape, abuse of power, and hatred that occur in the Bible
            are not of God, they are of sinful humans. God hates sin, and the sinful actions of man are not pleasing to
            Him. Just because something is written in the Bible as having occurred, does not mean it is pleasing to God.
            He also shows how each time a person disobeys God, there are consequences–polygamy and favoritism (ex.
            forefathers of Israel) result in familial strife, and adultery and murder (ex. King David) led to calamity
            for his household. God is righteous and just.{" "}
          </p>

          <p>
            Christians believe that “All Scripture is breathed out by God and profitable for teaching, for reproof, for
            correction, and for training in righteousness” (2 Timothy 3:16). Many people who say they are “Christians”
            pick and choose parts of the Bible to fit their own ideas, but true Christians must trust in and rely on all
            of the divinely-inspired Holy Bible. So yes, people who ignore parts of the Bible are not truly Christian.{" "}
          </p>
        </div>
        <hr />
      </Subpage>
    </Layout>
  );
};

export default FAQPage;
