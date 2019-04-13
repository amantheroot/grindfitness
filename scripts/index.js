var copydate = document.querySelector('#copydate');
copydate.innerHTML = new Date().getFullYear();

var menutoggle = document.querySelector(".nav__menutoggle");
var nav = document.querySelector("nav");

function ontoggleClick() {
  if (menutoggle.classList.value.indexOf("toggled") === -1) {
    menutoggle.classList.add("toggled");
    nav.classList.add("navtoggled");
  } else {
    menutoggle.classList.remove("toggled");
    nav.classList.remove("navtoggled");
  }
}
