var aaa ="fdfg dfgdf gd hd hdgh hgfh"
var bbb= aaa.split(" ");
console.log(bbb);
console.log(bbb.join());
console.log(bbb.join("-"));
console.log(bbb.join(""));


var day = new Date()
if (day.getDay()==5){
    console.log("cool its the weekend");
}else{
    console.log("boring");
}
console.log(day.getDay());

function fibonacciArray(n){
    var fibArr =[0,1];
    for (let i = 0;i<fibArr.length;i++){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
        if (fibArr.length===n){
            break
        }
    }
    return fibArr
}
var result = fibonacciArray(10);
console.log(result);