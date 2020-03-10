let buttons = document.getElementsByClassName("burger__button");
let sideMenu = document.getElementsByClassName("side-menu")[0];

buttons[0].addEventListener("click", function () {
    sideMenu.classList.toggle("shown");
});
buttons[1].addEventListener("click", function () {
    sideMenu.classList.toggle("shown");
});