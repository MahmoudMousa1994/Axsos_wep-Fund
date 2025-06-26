function showAlert() {
    alert("Loading weather report...");
}
function removeCookies(){
    var cookies=document.querySelector("#cookies");
    cookies.remove();
}
function changeTemp(){
    var x = document.querySelector("#tempdegree").value;
    var red = document.querySelectorAll(".max-temp");
    var blue = document.querySelectorAll(".min-temp");
    for (var i = 0;i<red.length;i++){
        var rednum = parseFloat(red[i].innerText);
        var bluenum= parseFloat(blue[i].innerText);

        if(x==="f"){
            var redf =Math.round((rednum*9/5)+32);
            var bluef =Math.round((bluenum*9/5)+32);
            red[i].innerText =redf+"°";
            blue[i].innerText =bluef+"°";
        }
        else if(x==="c"){
            var redc =Math.round((rednum-32)*5/9);
            var bluec =Math.round((bluenum-32)*5/9);
            red[i].innerText =redc+"°";
            blue[i].innerText =bluec+"°";
        }

    }
}
