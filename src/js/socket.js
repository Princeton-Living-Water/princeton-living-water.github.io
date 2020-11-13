import io from 'socket.io-client';
import constants from '../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];

var socket;

const connectSocket = ({ name, token, room, setMessages, setNumMessages }) => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {name, token, room});
  });

  socket.on("authenticated", (data) => {
    setNumMessages(data.messageCount);
    setMessages(data.messages);
  });

  socket.on("error", (error) => {
    console.log(error);
  });

  socket.on("unauthenticated", () => {
    if (typeof window !== `undefined`) {
    window.location.replace("/chat/login");
    }
  });
}

const sendMessage = (message) => {
  if (!socket) return;
  socket.emit("message", message);
}

const listenForMessages = (updateMessages) => {
  if (!socket) return;
  socket.on("chatUpdate", (data) => {
    updateMessages(data);
  });
}

const disconnectSocket = () => {
  if (!socket) return;
  socket.disconnect();
}

export { connectSocket, disconnectSocket, listenForMessages, sendMessage }
