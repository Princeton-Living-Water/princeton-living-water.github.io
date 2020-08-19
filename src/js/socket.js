import io from 'socket.io-client';

const SOCKET_URL = "http://127.0.0.1:8000/";

const connectSocket = ({ username, token, setHeader, setMessages, setNumMessages }) => {
  const socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {
      user: username,
      token: token,
      admin: "no"
    });
    socket.emit('room', username);
  });

  socket.on("authenticated", (data) => {
    setHeader(data.pseudo);
    setNumMessages(data.messageCount);
    setMessages(data.message);
  });

  socket.on("unauthenticated", () => {
    window.location.replace("/chat/login");
  });

  return socket;
}

const adminConnectSocket = (username, token, chatUser, setHeader, setMessages, setNumMessages) => {
  const socket = io(SOCKET_URL);
  
  socket.on("connect", () => {
    socket.emit("authenticate", {
      user: username,
      token: token,
      admin: "yes",
      chatUser: chatUser
    });
    socket.emit('room', username);
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