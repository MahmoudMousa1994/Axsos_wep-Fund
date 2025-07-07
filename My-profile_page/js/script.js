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
    info[index].style.display = "flex"
}
function decrease(index){
    info[index].style.display = "none"
}
// change back ground
var backGround = document.querySelectorAll('.bg')
function changeBg(){
    for (let i = 0; i<backGround.length;i++){
        setTimeout(() =>{
            for (let j= 0; j<backGround.length; j++){
                backGround[j].style.display= "none" ;
            }
            backGround[i].style.display= "flex";
        },i*4000);
    }
    setTimeout(changeBg,backGround.length*4000);
}
changeBg();