var extern = document.getElementsByTagName("link")[2].import;

window.addEventListener("load", function() {
  this.document
    .getElementById("devo-wrapper")
    .replaceWith(extern.getElementsByTagName("body")[0]);
});
