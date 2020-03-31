// window.addEventListener("load", function() {
//   var extern = this.document.getElementsByTagName("link")[2].import;
//   this.document
//     .getElementById("devo-wrapper")
//     .replaceWith(extern.getElementsByTagName("body")[0]);
// });

$(document).ready(function() {
  $("#devo-wrapper").load("devos/3-23-2020.html");
});
