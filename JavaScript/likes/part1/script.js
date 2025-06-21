function increseLike(){
    var countText = document.querySelector("#count");
    var countNumber = Number(countText.innerText);
    countNumber += 1
    countText.innerText= countNumber;
}
