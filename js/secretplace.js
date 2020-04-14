let username;
let password;

function login() {
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
    if (data.status === "content retrieved") {
      setContents(data);
    } else {
      const secretdiv = document.getElementById("secretcontent");
      secretdiv.style.color = "red";
      secretdiv.appendChild(document.createTextNode("wrong username/password combo"));
    }
  });
}

function setContents(data) {
  const login = document.getElementById("login-form");
  login.style.display = "none"

  const secretdiv = document.getElementById("secretcontent");

  const todo = document.createElement("h2");
  todo.innerHTML = "To do";
  const todocontent = document.createTextNode(data.content);
  secretdiv.appendChild(todo);
  secretdiv.appendChild(todocontent);
}
