const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
}

const getCookie = (name) => {
  let cookies = {};
  const cookiePairs = document.cookie.split(";");
  for (let cookiePair of cookiePairs) {
    const keyValue = cookiePair.split("=");
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();

    cookies[key] = value;
  }

  return cookies[name];
}

const getCookies = () => {
  let cookies = {};
  const cookiePairs = document.cookie.split(";");
  for (let cookiePair of cookiePairs) {
    const keyValue = cookiePair.split("=");
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();

    cookies[key] = value;
  }

  return cookies;
}

export { setCookie, getCookie, getCookies }
