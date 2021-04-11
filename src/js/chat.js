import axios from "axios";
import constants from '../../constants.js';
import { navigate } from "../js/utils.js";

const SERVER_URL = constants["SERVER_URL"];

const logout = (setCookies) => {
  // setCookies("name", "", { path: '/chat' });
  // setCookies("token", "", { path: '/chat' });

  navigate("/chat/login");
}

const roomPage = (setCookies) => {
  // setCookies("name", "", { path: '/chat' });
  // setCookies("token", "", { path: '/chat' });

  navigate("/chat/admin");
}

const getAdmins = async () => {
  const response = await axios.get(SERVER_URL + "getAdmins");
  let adminInfo = {};
  for (let key in response.data) {
    adminInfo[response.data[key]['name']] = response.data[key];
  }

  return adminInfo;
}

export { logout, roomPage, getAdmins } 
