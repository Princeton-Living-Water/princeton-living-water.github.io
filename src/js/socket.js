import io from 'socket.io-client';

const SOCKET_URL = "http://127.0.0.1:8000/";

let socket;

const connectSocket = ({ name, token, setMessages, setNumMessages }) => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {
      name,
      token,
      admin: "no"
    });
  });

  socket.on("authenticated", (data) => {
    socket.emit('room', name);
    setNumMessages(data.messageCount);
    setMessages(data.messages);
  });

  socket.on("error", (error) => {
    console.log(error);
  });

  socket.on("unauthenticated", () => {
    window.location.replace("/chat/login");
  });
}

const disconnectSocket = () => {
  socket.disconnect();
  console.log(socket);
}

const listenForMessages = (messages, setMessages) => {
  if (!socket) return;

  socket.on("chatUpdate", (data) => {
    setMessages([...messages, data]);
  });

  socket.on("chatUpdateAdmin", (data) => {
    setMessages([...messages, data]);
  });
}

const sendMessage = (message) => {
  if (!socket) return;

  socket.emit("message", message);
}

const adminConnectSocket = (name, token, chatUser, setHeader, setMessages, setNumMessages) => {
  const socket = io(SOCKET_URL);
  
  socket.on("connect", () => {
    socket.emit("authenticate", {
      name: name,
      token: token,
      admin: "yes",
      chatUser: chatUser
    });
    socket.emit('room', name);
  });

  socket.on("authenticated", (data) => {
    setHeader("Admin Chat with " + chatUser);
    setNumMessages(data.messageCount);
    setMessages(data.message);
  });

  socket.on("unauthenticated", () => {
    window.location.replace("/login");
  });
}

export { connectSocket, disconnectSocket, listenForMessages, sendMessage }
