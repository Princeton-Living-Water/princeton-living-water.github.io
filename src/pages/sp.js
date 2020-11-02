import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Subpage from "../components/subpage";

import "../assets/styles.css";
import addCollapsible from "../js/collapsible";

const SecretPage = () => {
  let username;
  let password;

  const login = () => {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    fetch("https://bawp.glitch.me/todo", {
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': username + ":" + password
      },
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.status === "content retrieved") {
        const login = document.getElementById("login-form");
        login.style.display = "none"
        setTodoContents(data);
      } else {
        const secretdiv = document.getElementById("secretcontent");
        secretdiv.style.color = "red";
        secretdiv.appendChild(document.createTextNode("wrong username/password combo"));
      }
    });

    fetch("https://bawp.glitch.me/prayers", {
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': username + ":" + password
      },
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.status === "content retrieved") {
        setPrayerContents(data);
      } else {
        const secretdiv = document.getElementById("secretcontent");
        secretdiv.style.color = "red";
        secretdiv.appendChild(document.createTextNode("wrong username/password combo"));
      }
    });
  }

  function setTodoContents(data) {
    const secretdiv = document.getElementById("secretcontent");

    const todoheading = document.createElement("h2");
    todoheading.innerHTML = "To do";
    const todocontent = document.createElement("ul");
    todocontent.innerHTML = data.content;

    // Append to the secretdiv
    secretdiv.appendChild(todoheading);
    secretdiv.appendChild(todocontent);
    secretdiv.appendChild(document.createElement("br"));

    if (username === "all") {
      const form = document.createElement("form");
      form.setAttribute("style", "display: flex; flex-direction: column");
      const todopost = document.createElement("textarea");
      todopost.setAttribute("id", "todopost");
      todopost.setAttribute("rows", "7");
      todopost.setAttribute("cols", "50");
      const todosend = document.createElement("input");
      todosend.setAttribute("id", "todosend");
      todosend.setAttribute("type", "button");
      todosend.setAttribute("onclick", "sendTodo()");
      todosend.setAttribute("value", "Send Todo (Overwrite Current; write with li tags for each bullet point)");

      form.appendChild(todopost);
      form.appendChild(todosend);

      secretdiv.appendChild(form);
      document.getElementById("todopost").innerHTML = data.content;

    }

    secretdiv.appendChild(document.createElement("hr"));
  }

  function sendTodo() {
    const todo = document.getElementById("todopost");

    fetch("https://bawp.glitch.me/todo", {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': username + ":" + password,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "todo": todo.value }),
    }).then((response) => {
      return response.json();
    }).then((data) => {
<<<<<<< HEAD
      if (typeof window !== `undefined`) {
        window.alert("New todo set!");
      }
=======
      // window.alert("New todo set!");
>>>>>>> 8d098c4242e6c290d86c400bd75f37b5f17aed39
      todo.value = "";
    });
  }

  function setPrayerContents(data) {
    const secretdiv = document.getElementById("secretcontent");

    const prayerheading = document.createElement("h2");
    prayerheading.innerHTML = "Prayers";
    secretdiv.appendChild(prayerheading);

    const content = JSON.parse(data.content);
    // add all the prayer requests of the people
    for (let [key, val] of Object.entries(content)) {
      const prayername = document.createElement("h3");
      prayername.innerHTML = key;
      const prayercontent = document.createElement("p");
      prayercontent.innerHTML = val;

      secretdiv.appendChild(prayername);
      secretdiv.appendChild(prayercontent);
      secretdiv.appendChild(document.createElement("br"));
    }

    const form = document.createElement("form");
    form.setAttribute("style", "display: flex; flex-direction: column");
    const prayerpost = document.createElement("textarea");
    prayerpost.setAttribute("id", "prayerpost");
    prayerpost.setAttribute("rows", "7");
    prayerpost.setAttribute("cols", "50");
    const prayersend = document.createElement("input");
    prayersend.setAttribute("id", "prayersend");
    prayersend.setAttribute("type", "button");
    prayersend.setAttribute("onclick", "sendPrayer()");
    prayersend.setAttribute("value", "Send Prayer Requests for Self (Overwrite Current)");

    form.appendChild(prayerpost);
    form.appendChild(prayersend);

    secretdiv.appendChild(form);

    secretdiv.appendChild(document.createElement("hr"));


    for (let [key, val] of Object.entries(content)) {
      if(key === username){
        document.getElementById("prayerpost").innerHTML = val;
      }
    }

  }

  function sendPrayer() {
    const prayer = document.getElementById("prayerpost");

    const url = "https://bawp.glitch.me/prayers/" + username;
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': username + ":" + password,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "prayer": prayer.value }),
    }).then((response) => {
      return response.json();
    }).then((data) => {
<<<<<<< HEAD
      if (typeof window !== `undefined`) {
        window.alert("New prayer set!");
      }
=======
      // window.alert("New prayer set!");
>>>>>>> 8d098c4242e6c290d86c400bd75f37b5f17aed39
      prayer.value = "";
    });
  }
  return (
    <Layout>
      <SEO title="" />
      <Subpage>
      <form id="login-form">
        username: <input type="text" id="username"/><br/>
        password: <input type="password" id="password"/><br/>
        <input type="button" onClick={login} value="Log in"/>
      </form>
      <div id="secretcontent"></div>
      </Subpage>
    </Layout>
  );
};

export default SecretPage;
