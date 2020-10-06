import io from 'socket.io-client';
import constants from '../../constants.js';

const SOCKET_URL = constants["SOCKET_URL"];

let socket;

const connectSocket = ({ name, token, setMessages, setNumMessages }) => {
  console.log("in");
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

const adminConnectSocket = ({ name, token, chatUser, setMessages, setNumMessages }) => {
  socket = io(SOCKET_URL);
  
  socket.on("connect", () => {
    socket.emit("authenticate", {
      name: name,
      token: token,
      admin: "yes",
      chatUser: chatUser
    });
  });

  socket.on("authenticated", (data) => {
    socket.emit('room', chatUser);
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

const sendAdminMessage = (message) => {
  if (!socket) return;
  socket.emit("adminMessage", message);
}


export { connectSocket, adminConnectSocket, 
         disconnectSocket, listenForMessages, 
         sendMessage, sendAdminMessage }
