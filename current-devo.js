var extern = document.getElementsByTagName("link")[2].import;

console.log(extern);

window.addEventListener("load", function() {
  this.document
    .getElementById("devo-wrapper")
    .replaceWith(extern.getElementsByTagName("body")[0]);
});
