var newName = document.querySelector("#change");
function changeName(){
    newName.innerText = "Mahmoud Shuman";
}
function  removeContact(element){
    var account = element.closest(".card-list-item");
    account.remove();
    var num = document.querySelector(".badge")
    var connectionsNumber = Number(num.innerText);
    connectionsNumber -= 1;
    num.innerText = connectionsNumber;
}
function addconniction(){
    var num = document.querySelector("#connections")
    var connectionsNumber = Number(num.innerText);
    connectionsNumber += 1;
    num.innerText = connectionsNumber;

}