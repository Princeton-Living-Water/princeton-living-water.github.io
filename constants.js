const ENV_DEV = {
  "URL": "http://localhost:8080",
  "API_URL": "http://localhost:8000/",
  "SOCKET_URL": "http://localhost:8000/"
}

const ENV_PROD = {
  "URL": "https://princetonlivingwater.org/",
  "API_URL" : "https://hungry-beaver-api.herokuapp.com/",
  "SOCKET_URL" : "https://hungry-beaver.herokuapp.com/"
};

const env = process.env.GATSBY_ACTIVE_ENV || 
            process.env.NODE_ENV || 
            "development";
const constants = env === "development" ? ENV_DEV : ENV_PROD;

export default constants;
