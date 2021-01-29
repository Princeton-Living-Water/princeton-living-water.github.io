const navigate = (url, openNewTab) => {
  if (typeof window !== `undefined`) {
    if (openNewTab === true) {
      window.open(url)
    } else {
      window.location.replace(url);
    }
  }
}

export { navigate }
