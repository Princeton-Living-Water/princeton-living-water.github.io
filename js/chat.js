var auth_token;

function signup() {
  axios
    .post("http://localhost:5000/createUser", {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
    .then(
      (response) => {
        if (response.data.status == "success") login();
        else console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  return false;
}

function login() {
  axios
    .post("http://localhost:5000/login", {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  return false;
}
