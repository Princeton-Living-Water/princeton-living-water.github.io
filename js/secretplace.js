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
    console.log(data);
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

  if (username === "admin") {
    const todopost = document.createElement("textarea");
    todopost.setAttribute("id", "todopost");
    todopost.setAttribute("rows", "7");
    todopost.setAttribute("cols", "50");
    const todosend = document.createElement("input");
    todosend.setAttribute("id", "todosend");
    todosend.setAttribute("type", "button");
    todosend.setAttribute("onclick", "sendTodo()");

    secretdiv.appendChild(todopost);
    secretdiv.appendChild(todosend);
  }
}

// TODO: need to fix some stuff
function sendTodo() {
  const todo = document.getElementById("todopost").value;

  console.log(todo);
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
    body: JSON.stringify({ "todo": todo }),
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}
