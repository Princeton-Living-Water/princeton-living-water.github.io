const ENV_DEV = {
  "API_URL": "http://localhost:5000/",
  "SOCKET_URL": "http://localhost:8000/",
  "URL": "http://localhost:8080",
}

const ENV_PROD = {
  "URL": "https://princetonlivingwater.org/",
  "API_URL" : "https://hungry-beaver-api.herokuapp.com/",
  "SOCKET_URL" : "https://hungry-beaver.herokuapp.com/"
};

const env = process.env.ENV || "development";
const constants = env === "development" ? ENV_DEV : ENV_PROD;

export default constants;
