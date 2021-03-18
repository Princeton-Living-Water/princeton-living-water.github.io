import io from 'socket.io-client';
import constants from '../../constants.js';
import axios from "axios";
import { navigate } from "../js/utils.js";

const SOCKET_URL = constants["SOCKET_URL"];
const API_URL = constants["API_URL"];

var socket;

const connectSocket = ({ name, token, room, setMessagesScrollBot, setMessagesScrollTop, setContactName, setContactPhone, setContactEmail,setContactColor }) => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    socket.emit("authenticate", {name, token, room});
  });

  if (setMessagesScrollBot && setContactName) {
    socket.on("authenticated", (data) => {
      if (data.admin && name === room) {
        navigate("/chat/admin");
      }
      setMessagesScrollBot(data.messages);

      axios.get(API_URL + "getAdmins").then((response) => {
        var dict = {}
        for(var key in response.data) {
          dict[response.data[key]['name']] = response.data[key]
        }

        var messages = data.messages
        if(messages.length > 0) {
          var i = messages.length - 1;
          while(i >= 0 && !(messages[i]["sender"] in dict)) {
            i--;
          }
          if(i>=0) {
            var info = dict[messages[i]["sender"]];
            setContactName(info["name"]);
            setContactPhone(info["phone"]);
            setContactEmail(info["email"]);
            setContactColor(info["color"]);
          }
        }
      })
    });
  }
  
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

const listenForMessages = (updateMessages) => {
  if (!socket) return;
  socket.on("chat update", (data) => {
    updateMessages(data);
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
