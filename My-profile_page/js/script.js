var  leftSecondNav = document.querySelector('.second-nav-lift');
var rightSecondNav = document.querySelector('.second-nav-right');
var secNavItem = document.querySelectorAll('.second-nav-item')

function secondNavL(){
    rightSecondNav.style.display = "none";
    leftSecondNav.style.display = "flex";
    secNavItem[1].classList.remove("current-page");
    secNavItem[0].classList.add("current-page");
}
function secondNavR(){
    leftSecondNav.style.display = "none";
    rightSecondNav.style.display = "flex";
    secNavItem[0].classList.remove("current-page");
    secNavItem[1].classList.add("current-page");
}
// project-info exstend
var info = document.querySelectorAll(".project-info");
function exstend(index){
    info[index].style.display = "inline-block"
}
function decrease(index){
    info[index].style.display = "none"
}

