var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var h3 = document.querySelector("h3");

function switchtext(){
    h3.innerText="new title";
}
var yesimg = document.querySelector("#yes");
function switchimg(){
    yesimg.src = "close-circle.png";
}

// function setActive(x){
//     x.style.backgroundColor = "#222222";
//     x.style.color = "#ffffff"
// } 

function setActive(x){
    if(x.classList.includes(dark)){
        x.innerText = "switch to light mode";
        x.classList.remove("dark");
    } else{
        x.innerText = "switch to dark mode";
        x.classList.add("dark");
    }
    // x.classList.add("dark");
}



