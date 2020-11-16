const navigate = (url) => {
  if (typeof window !== `undefined`) {
    window.location.replace(url);
  }
}

export { navigate }
