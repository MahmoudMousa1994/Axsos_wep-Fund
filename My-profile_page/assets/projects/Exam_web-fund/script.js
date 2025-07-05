// change BGcolor o onmouseover
function btnBgColor(element){
    element.style.backgroundColor="#3b5498";
}
// to change BGcolor to original onmouseout
function btnBgColorOld(element){
    element.style.backgroundColor="blue";
}
// change paragraph and img 
function changeTextImg(){
    var text = document.querySelectorAll(".new-text")
    var img = document.querySelector(".second-sec img")
    if (text[0].innerText==="Who we are"){
        text[0].innerText="What we do"
        text[1].innerText="At our company, innovation drives everything we do. We specialize in leveraging cutting-edge technologies and strategic expertise to empower businesses to grow smarter and faster. From enhancing digital experiences and optimizing internal workflows to unlocking new revenue opportunities"
        img.src="./WebFund FSD-PT-OL-04-2025 -images and icons/alt-features.png"
        // change paragraph and img to original
    }else{
        text[0].innerText="Who we are"
        text[1].innerText="We are a forward-thinking company dedicated to providing innovative solutions that fuel business growth. With a focus on modern technologies and strategic insights, we help businesses streamline their operations, enhance customer experiences, and scale efficiently. Whether you're looking to improve your digital presence, optimize processes, or drive new revenue streams"
        img.src="./WebFund FSD-PT-OL-04-2025 -images and icons/about.jpg"
    }
}
// add new div
function addSerices(){
    var  cards = document.querySelector('.services-cards');
    var newCard = document.createElement('div');
    newCard.innerHTML=
    `
    <div class="card">
    <img src="./WebFund FSD-PT-OL-04-2025 -images and icons/features.png" alt="features">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est hic dolorem ducimus fuga ullam? Ducimus quidem consequuntur earum hic.</p>
    </div>
    `
cards.appendChild(newCard);
}