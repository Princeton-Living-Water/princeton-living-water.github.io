function signup() {
  axios
    .post("http://localhost:5000/createUser", {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
    .then(
      (response) => {
        if (response.data.status == "success") login();
        else console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  return false;
}

function login() {
  let user_input = document.getElementById("username").value;
  let pass_input = document.getElementById("password").value;
  axios
    .post("http://localhost:5000/login", {
      username: user_input,
      password: pass_input,
    })
    .then(
      (response) => {
        if (response.data.status == "success") {
          document.cookie = "username=" + user_input;
          document.cookie = "token=" + response.data.token;
          window.location.href = "./chat";
        }
      },
      (error) => {
        console.log(error);
      }
    );
  return false;
}

function getCookies() {
  let cookies = {};
  const cookiePairs = document.cookie.split(";");
  for (let cookiePair of cookiePairs) {
    const keyValue = cookiePair.split("=");
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();

    cookies[key] = value;
  }

  return cookies;
}

var socket;

function connectSocket() {
  const cookies = getCookies();
  if (!("username" in cookies) || !("token" in cookies)) {
    window.location.replace("https://princetonlivingwater.org/chat/login");
    return;
  }

  socket = io("http://localhost:8000");
  socket.on("connect", function () {
    socket.emit("authenticate", {
      user: cookies.username,
      token: cookies.token,
    });
  });

  socket.on("authenticated", function (data) {
    console.log("authenticated");
    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML = "";
    const usernameText = document.createTextNode(data.username);
    usernameDiv.appendChild(usernameText);
  });

  socket.on("unauthenticated", function () {
    console.log("unauthenticated");
    window.location.replace("https://princetonlivingwater.org/chat/login");
  });

  socket.on("chatUpdate", function (data) {
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper");

    console.log(data.message);
    console.log("chat update");
  });
}

function sendMessage(message) {
  socket.emit("message", message);
}
