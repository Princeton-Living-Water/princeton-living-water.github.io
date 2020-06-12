var API_URL = "http://localhost:5000/";
var SOCKET_URL = "http://localhost:8000/";

// Sign up / log in functions

function signup() {
  axios
    .post(API_URL + "createUser", {
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
    .post(API_URL + "login", {
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

// Socket functions

var socket;

function connectSocket() {
  const cookies = getCookies();
  if (!("username" in cookies) || !("token" in cookies)) {
    window.location.replace("https://princetonlivingwater.org/chat/login");
    return;
  }

  socket = io(SOCKET_URL);
  socket.on("connect", function () {
    socket.emit("authenticate", {
      user: cookies.username,
      token: cookies.token,
    });
  });

  socket.on("authenticated", function (data) {
    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML = "";
    const usernameText = document.createTextNode(data.username);
    usernameDiv.appendChild(usernameText);

    const messageLength = data.message.length;
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";

    for (i = 0; i < messageLength; i++) {
      const message = document.createElement('div');
      message.innerHTML = data.message[i];
      messagesDiv.appendChild(message);
    }
    console.log(data);
  });

  socket.on("unauthenticated", function () {
    window.location.replace("https://princetonlivingwater.org/chat/login");
  });

  socket.on("chatUpdate", function (data) {
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper");
    const messageText = document.createTextNode(data.message);
    messageWrapper.appendChild(messageText);

    document.getElementById("messages").appendChild(messageWrapper);
  });
}

function sendMessage(message) {
  socket.emit("message", message);
}

// Admin functions

function updateRooms() {
  axios
    .get(API_URL + "getRooms", {
      headers: { Authorization: "Basic admin:justinthebestta" },
    })
    .then((response) => {
      if (response.data.status != "success") {
        window.location.replace("https://princetonlivingwater.org/chat/login");
        return;
      }

      const chats = response.data.chats.split(";"); // ASSUMES ';' cannot be in username
      for (const room of chats) {
        const roomWrapper = document.createElement("div");
        roomWrapper.setAttribute("class", "roomWrapper");
        const roomName = document.createTextNode(room);
        roomWrapper.appendChild(roomName);

        document.getElementById("rooms").appendChild(roomWrapper);
      }
    });
}
