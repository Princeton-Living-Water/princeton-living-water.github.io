const ENV_DEV = {
  "URL": "http://localhost:8080",
  "SERVER_URL": "http://localhost:8000/",
}

const ENV_PROD = {
  "URL": "https://princetonlivingwater.org/",
  "SERVER_URL" : "https://hungry-beaver.herokuapp.com/",
};

const env = process.env.GATSBY_ACTIVE_ENV || 
            process.env.NODE_ENV || 
            "development";
const constants = env === "development" ? ENV_DEV : ENV_PROD;

export default constants;
