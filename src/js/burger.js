let buttons = document.getElementsByClassName("burger__button")[0];
let sideMenu = document.getElementsByClassName("side-menu")[0];
let navButtons = document.getElementsByClassName("navigation__item");

buttons.addEventListener("click", showMenu);

function showMenu() {
    sideMenu.classList.toggle("shown");
}

function hideMenu() {
    sideMenu.classList.remove("shown");
}

Array.prototype.forEach.call(navButtons, function(item){
    item.addEventListener("click", hideMenu);
});
