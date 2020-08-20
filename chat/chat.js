var API_URL = "http://localhost:5000/";
var SOCKET_URL = "http://localhost:8000/";

// Sign up / log in functions

function signup() {
  user = document.getElementById("username").value;
  axios
    .post(API_URL + "createUser", {
      username: user,
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
          document.cookie = "name=" + response.data.name;
          document.cookie = "token=" + response.data.token; 
          if (response.data.admin !== "no")
            window.location.href = "./admin";
          else
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
var earliest_message=0;
var cookies;

function connectSocket() {
  cookies = getCookies()
  if (!("name" in cookies) || !("token" in cookies)) {
    window.location.replace("https://princetonlivingwater.org/chat/login");
    return;
  }

  socket = io(SOCKET_URL);
  socket.on("connect", function () {
    socket.emit('room', cookies.name);
    socket.emit("authenticate", {
      name: cookies.name,
      token: cookies.token,
      admin: "no"
    });
  });

  socket.on("authenticated", function (data) {
    earliest_message = data.messageCount;

    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML = "";
    const usernameText = document.createTextNode(data.name);
    usernameDiv.appendChild(usernameText);

    const messageLength = data.message.length;
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
    
    earliest_message = data.messageCount - messageLength + 1;

    console.log(earliest_message);
    
    for (i = 0; i < messageLength; i++) {
      const message = document.createElement('div');
      message.innerHTML = data.message[i]['message'];
      if (data.message[i]['sender'] == 'admin') {
        message.setAttribute("class","messageWrapper adminMessage");
      }
      else {
        message.setAttribute("class","messageWrapper userMessage");
      }
      messagesDiv.appendChild(message);
    }
    console.log(data);
  });

  socket.on("unauthenticated", function () {
    window.location.replace("https://princetonlivingwater.org/chat/login");
  });

  socket.on("chatUpdate", function (data) {
    console.log("user update");
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper userMessage");
    const messageText = document.createTextNode(data.message);
    messageWrapper.appendChild(messageText);

    document.getElementById("messages").appendChild(messageWrapper);
  });

  socket.on("chatUpdateAdmin", function (data) {
    console.log("admin update");
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper adminMessage");
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
  cookies = getCookies();
  if (!("name" in cookies) || !("token" in cookies)) {
    window.location.replace("https://princetonlivingwater.org/chat/login");
    return;
  }
  axios
    .get(API_URL + "getRooms", 
      {
      params: { name: cookies.name},
      headers: {
        'Authorization': "Bearer " + cookies.token,
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    .then((response) => {
      if (response.data.status != "success") {
        window.location.replace("https://princetonlivingwater.org/chat/login");
        return;
      }
      const chats = response.data.chats;
      for (const room of chats) {
        const roomWrapper = document.createElement("div");
        const roomAnchor = document.createElement("a");
        roomAnchor.href = '#';
        roomAnchor.addEventListener('click', function() {
          var newWindow = window.open();
          newWindow.document.location.href = "https://princetonlivingwater.org/chat/adminChat?user=" + this.innerHTML;
          });

        roomWrapper.setAttribute("class", "roomWrapper");
        const roomName = document.createTextNode(room);
        roomAnchor.appendChild(roomName);
        roomWrapper.appendChild(roomAnchor);

        document.getElementById("rooms").appendChild(roomWrapper);
      }
    });
}

function adminConnectSocket(chatUser) {
  cookies = getCookies()
  if (!("name" in cookies) || !("token" in cookies)) {
    window.location.replace("https://princetonlivingwater.org/chat/login");
    return;
  }

  socket = io(SOCKET_URL);
  socket.on("connect", function () {
    socket.emit('room', chatUser);
    socket.emit("authenticate", {
      user: cookies.name,
      token: cookies.token,
      admin: "yes",
      chatUser: chatUser
    });
  });

  socket.on("authenticated", function (data) {
    earliest_message = data.messageCount;
    console.log(data.message);
    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML = "";
    const usernameText = document.createTextNode("Admin Chat with " + chatUser);
    usernameDiv.appendChild(usernameText);

    const messageLength = data.message.length;
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
    
    earliest_message = data.messageCount - messageLength + 1;

    console.log(earliest_message);
    
    for (i = 0; i < messageLength; i++) {
      const message = document.createElement('div');
      message.innerHTML = data.message[i]['message'];
      if (data.message[i]['sender'] == 'admin') {
        message.setAttribute("class","messageWrapper adminMessage");
      }
      else {
        message.setAttribute("class","messageWrapper userMessage");
      }
      messagesDiv.appendChild(message);
    }
    console.log(data);
  });

  socket.on("unauthenticated", function () {
    window.location.replace("https://princetonlivingwater.org/chat/login");
  });

  socket.on("chatUpdate", function (data) {
    console.log("user update");
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper userMessage");
    const messageText = document.createTextNode(data.message);
    messageWrapper.appendChild(messageText);

    document.getElementById("messages").appendChild(messageWrapper);
  });

  socket.on("chatUpdateAdmin", function (data) {
    console.log("admin update");
    let messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper adminMessage");
    const messageText = document.createTextNode(data.message);
    messageWrapper.appendChild(messageText);

    document.getElementById("messages").appendChild(messageWrapper);
  });
}

function adminSendMessage(message) {
  console.log("admin message");
  socket.emit("admimMessage", message);
}
