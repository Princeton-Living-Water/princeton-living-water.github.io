import io from 'socket.io-client';

const SOCKET_URL = "http://127.0.0.1:8000/";

const connectSocket = ({ username, token, setMessages, setNumMessages }) => {
  const socket = io(SOCKET_URL);
  
  socket.on("connect", () => {
    console.log("HI");
    socket.emit("authenticate", {
      name: username,
      token: token,
      admin: "no"
    });
    socket.emit('room', name);
  });

  socket.on("authenticated", (data) => {
    console.log("HI")
    setNumMessages(data.messageCount);
    setMessages(data.message);
  });

  socket.on("unauthenticated", () => {
    window.location.replace("/chat/login");
  });

  return socket;
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

export { connectSocket }
