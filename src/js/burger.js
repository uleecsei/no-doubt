let buttons = document.getElementsByClassName("burger__button");
let sideMenu = document.getElementsByClassName("side-menu")[0];

buttons[0].addEventListener("click", showMenu);
buttons[1].addEventListener("click", showMenu);

function showMenu() {
    sideMenu.classList.toggle("shown");
}

