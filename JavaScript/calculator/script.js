let displayVariable = document.querySelector("#display");
let current = "" ;
let opperate = "";
let temp ="";
function press(index){
    current+= index
    displayVariable.textContent = current;
}
function setOP(op){
    temp = current
    opperate = op
    current =""
}
function calculate(){
    let num1 = parseFloat(temp);
    let num2 = parseFloat(current);
    if (opperate ==='/'){
        let equal = num1/num2
    displayVariable.textContent = equal;
    current = equal;
    temp ="";
    }
    else if(opperate ==='*'){
        let equal = num1*num2
    displayVariable.textContent = equal;
    current = equal;
    temp ="";
    }
    else if(opperate ==='-'){
        let equal = num1-num2
    displayVariable.textContent = equal;
    current = equal;
    temp ="";
    }
    else if(opperate ==='+'){
        let equal = num1+num2
    displayVariable.textContent = equal;
    current = equal;
    temp ="";
    }
}
function clr(){
    current="";
    opperate="";
    temp = "";
    displayVariable.textContent = "0";
}
