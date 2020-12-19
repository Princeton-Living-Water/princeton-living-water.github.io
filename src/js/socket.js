import io from 'socket.io-client';
import constants from '../../constants.js';
import { navigate } from "../js/utils.js";

const SOCKET_URL = constants["SOCKET_URL"];

var socket;

const connectSocket = ({ name, token, room, setMessagesScrollBot, setMessagesScrollTop }) => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {name, token, room});
  });

  socket.on("authenticated", (data) => {
    if (data.admin && name === room) {
      navigate("/chat/admin");
    }
    setMessagesScrollBot(data.messages);
  });

  socket.on("past messages received", (data) => {
    setMessagesScrollTop(data.messages);
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
  socket.emit("chat message", message);
}

const oldMessages = (num) => {
  if (!socket) return;
  socket.emit("past messages", num);
}

const listenForMessages = (updateMessages) => {
  if (!socket) return;
  socket.on("chat update", (data) => {
    updateMessages(data);
  });
}

const disconnectSocket = () => {
  if (!socket) return;
  socket.disconnect();
}

export { connectSocket, disconnectSocket, listenForMessages, sendMessage, oldMessages }
