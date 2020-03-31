window.addEventListener("load", function() {
  var extern = this.document.getElementsByTagName("link")[2].import;
  this.document
    .getElementById("devo-wrapper")
    .replaceWith(extern.getElementsByTagName("body")[0]);
});
