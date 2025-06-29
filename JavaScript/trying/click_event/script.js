var imgs = document.querySelectorAll("img");
var btn = document.querySelectorAll("button");
function turnoff(index){
    // element.innerText = "off";
    if (btn[index].innerText === "off"){
        btn[index].innerText = "on";
        imgs[index].src="https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg?semt=ais_hybrid&w=740";
    }else{
        btn[index].innerText = "off";
        imgs[index].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s"
    }
}
// function hide(element){
//     element.remove();
// }