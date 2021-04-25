const navigate = (url, openNewTab) => {
  if (typeof window !== `undefined`) {
    if (openNewTab === true) {
      window.open(url)
    } else {
      window.location.href = url;
    }
  }
}

const getTime = (timestamp) => {
  const datetime = new Date(timestamp);
  return datetime.toLocaleTimeString();
}

export { navigate, getTime }
