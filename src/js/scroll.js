window.addEventListener('scroll', function(){
    let topBorder = document.documentElement.getBoundingClientRect().top;
    let newsContainerOffset = document.getElementsByClassName('news__container')[0].offsetTop;
    let header = document.getElementsByClassName('header')[0];
    let logoWrapper = document.getElementsByClassName('header__branding')[0];
    let logo = document.getElementsByClassName('header__title')[0];

    if(topBorder <= -1 * (newsContainerOffset + header.style.height)){
        logoWrapper.style.height = "0px";
        logo.style.transform = "translateY(-100%)";
    }
    else{
        logoWrapper.style.height = "80px";
        logo.style.transform = "translateY(0%)";
    }
});


