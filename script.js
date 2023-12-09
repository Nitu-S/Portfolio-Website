let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let btns = document.querySelectorAll(".btn");
let links = document.querySelectorAll("a");
let items = document.querySelectorAll(".item");
let learn = document.querySelectorAll(".learn");

const boop = new Audio();
const click = new Audio();
click.src = "sound/click-sound.wav";
boop.src = "sound/boop-sound.wav";

//for buttons
btns.forEach((button) => {
  button.addEventListener("click", () => {
    click.play();
  });
});

btns.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    boop.play();
  });
});

//for links
links.forEach((link) => {
  link.addEventListener("click", () => {
    click.play();
  });
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    boop.play();
  });
});

/*for items*/

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    boop.play();
  });
});

//for learn more button

learn.forEach((l) => {
  l.addEventListener("click", () => {
    click.play();
  });
});

learn.forEach((l) => {
  l.addEventListener("mouseenter", () => {
    boop.play();
  });
});
//for menu
menu.onclick = () => {
  navbar.classList.toggle("active");
};

//darkmode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

//jquery
//===============SECURITY=========================
$(document).ready(function () {
  $("body").bind("cut copy", function (e) {
    e.preventDefault();
  });
  $("img").on("contextmenu", function (e) {
    return false;
  });
  $("body").on("contextmenu", function (e) {
    return false;
  });
});
