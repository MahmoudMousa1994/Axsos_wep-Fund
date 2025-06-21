function increseLike(button){
    var post = button.closest('.likes');
    var countText = post.querySelector(".like-count");
    var countNumber = Number(countText.innerText);
    countNumber += 1
    countText.innerText= countNumber;
}
