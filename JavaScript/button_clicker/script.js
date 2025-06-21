function login_logout(element){
    if(element.innerText === "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}
function add(element){
    element.remove();
}
function showAlert() {
    alert("Ninja was liked");
}