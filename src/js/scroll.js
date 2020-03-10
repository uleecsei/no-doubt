window.addEventListener('scroll', function(){
    let topBorder = document.documentElement.getBoundingClientRect().top;
    let blockOffset = 400;
    let header = document.getElementsByClassName('header')[0];
    let logoWrapper = document.getElementsByClassName('header__branding')[0];
    let logo = document.getElementsByClassName('header__title')[0];
    let sideMenu = document.getElementsByClassName('side-menu')[0];

    if(topBorder <= -1 * (blockOffset + header.style.height)){
        logoWrapper.style.height = "0px";
        logo.style.transform = "translateY(-100%)";
        sideMenu.style.top = "82px";
    }
    else{
        logoWrapper.style.height = "80px";
        logo.style.transform = "translateY(0%)";
        sideMenu.style.top = "162px";
    }
});


