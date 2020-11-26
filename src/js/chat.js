import { navigate } from "../js/utils.js";

const logout = (setCookies) => {
  // setCookies("name", "", { path: '/chat' });
  // setCookies("token", "", { path: '/chat' });

  navigate("/chat/login");
}

export { logout } 
