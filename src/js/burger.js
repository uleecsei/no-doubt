let buttons = document.getElementsByClassName("burger__button")[0];
let sideMenu = document.getElementsByClassName("side-menu")[0];

buttons.addEventListener("click", showMenu);

function showMenu() {
    sideMenu.classList.toggle("shown");
}

