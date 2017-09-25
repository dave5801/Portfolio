function respNav() {
  var x = document.getElementById("main-nav-section");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}
