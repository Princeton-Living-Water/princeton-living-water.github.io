import io from 'socket.io-client';
import constants from '../../constants.js';
import { navigate } from "../js/utils.js";

const SOCKET_URL = constants["SOCKET_URL"];

var socket;

const connectSocket = ({ name, token, room, setMessages, setNumMessages }) => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {name, token, room});
  });

  socket.on("authenticated", (data) => {
    if (data.admin && name === room) {
      navigate("/chat/admin");
    }
    setNumMessages(data.messageCount);
    setMessages(data.messages);
  });

  socket.on("error", (error) => {
    console.log(error);
    navigate("/chat/login");
  });

  socket.on("unauthenticated", () => {
    console.log("unauthenticated");
    navigate("/chat/login");
  });

  socket.on("unauthenticated admin", () => {
    console.log("unauthenticated admin");
    navigate("/chat");
  })
}

const sendMessage = (message) => {
  if (!socket) return;
  socket.emit("message", message);
}

const listenForMessages = (updateMessages) => {
  if (!socket) return;
  socket.on("chatUpdate", (data) => {
    console.log(data)
    updateMessages(data);
  });
}

const disconnectSocket = () => {
  if (!socket) return;
  socket.disconnect();
}

export { connectSocket, disconnectSocket, listenForMessages, sendMessage }
