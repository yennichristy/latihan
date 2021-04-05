function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var lightHead = document.getElementById("header").className === "header";
  console.log(lightHead);
  if (lightHead) {
    document.getElementById("header").className = "header-dark-mode";
  } else if (!lightHead) {
    document.getElementById("header").className = "header";
  }
}
