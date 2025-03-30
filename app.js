const linkmobile1 = document.querySelector(".linkmobile1");
const linkmobile2 = document.querySelector(".linkmobile2");
const linkmobile3 = document.querySelector(".linkmobile3");
const linkmobile4 = document.querySelector(".linkmobile4");

const menubar = document.querySelector("#menubar");
const exitmenubar = document.querySelector("#exitmenubar");

const containermenu = document.querySelector("#containermenu");

menubar.onclick = function () {
  containermenu.style.display = "inherit";
  containermenu.style.animation = " container 0.5s reverse ease-in 1";
  containermenu.style.transform = "none";
};
exitmenubar.onclick = function () {
  containermenu.style.display = "none";
};
linkmobile1.onclick = function () {
  containermenu.style.display = "none";
};
linkmobile2.onclick = function () {
  containermenu.style.display = "none";
};
linkmobile3.onclick = function () {
  containermenu.style.display = "none";
};
linkmobile4.onclick = function () {
  containermenu.style.display = "none";
};
