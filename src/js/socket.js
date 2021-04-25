import io from 'socket.io-client';
import constants from '../../constants.js';
import { getAdmins } from "./chat.js";
import { navigate } from "../js/utils.js";

const SERVER_URL = constants["SERVER_URL"];

var socket;

const connectSocket = (
  { name, token, room, setMessagesScrollBot, setMessagesScrollTop, 
    setContact }) => {
  socket = io(SERVER_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {name, token, room});
  });

  socket.on("authenticated", async (data) => {
    if (data.admin && name === room) {
      navigate("/chat/admin");
    }

    if (setMessagesScrollBot) {
      setMessagesScrollBot(data.messages);
    }
      
    if (setContact && data.messages.length > 0) {
      let admins = await getAdmins();

      const messages = data.messages;
      for (let i = data.messages.length-1; i >= 0; i--) {
        if (messages[i].sender in admins) {
          const admin = admins[messages[i].sender];
          setContact(admin);
          break;
        }
      }
    }
  });
  
  if (setMessagesScrollTop) {
    socket.on("past messages received", (data) => {
      setMessagesScrollTop(data.messages);
    });
  }

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

const listenForMessages = (updateMessages, admins) => {
  if (!socket) return;
  socket.on("chat update", (data) => {
    updateMessages(data, admins);
  });
}

const listenForRooms = (updateRooms) => {
  if (!socket) return;
  socket.on("rooms update", (data) => {
    updateRooms(data);
  });
}

const disconnectSocket = () => {
  if (!socket) return;
  socket.disconnect();
}

export { 
  connectSocket, disconnectSocket, listenForMessages, listenForRooms, 
  sendMessage, oldMessages 
}
