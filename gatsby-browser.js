exports.onRouteUpdate = ({ location }) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_location: location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    page_title: document.title,
  });
};
