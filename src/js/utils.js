const navigate = (url) => {
  if (typeof window !== `undefined`) {
    window.location.replace("/chat/login");
  }
}

export { navigate }
