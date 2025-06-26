//   -----------------------------------------------------------
console.log("********** 1.Always Hungry ***********");
function alwaysHungry(arr){
    if (arr.includes("food")===false){
        console.log("Iam hungry")
    }
    else { 
    for (let i=1;i<arr.length;i++){
        if (arr[i]==="food"){
            console.log("Yummy");
        }
    }
    }
}
alwaysHungry([3.14,"food","pie",true,"food"]);
alwaysHungry([4,1,5,7,2]);
//   -----------------------------------------------------------
console.log("********** 2.High Pass Filter ***********");
function highPass(arr,cutoff){
    var filterArr=[];
    for (let i=0;i<arr.length;i++){
        if (arr[i]>=cutoff){
            filterArr.push(arr[i]);
        }
    }
    return filterArr
}
var result = highPass([4,8,6,2,5,3,6,,5,25,95,-4,],5)
console.log(result);
//   -----------------------------------------------------------
console.log("********** 3.Better than average ***********");
function betterThanAverage(arr){
    var sum = 0
    var count = 0
    for (let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    for (let i = 0;i<arr.length;i++){
        if (arr[i]>=sum/arr.length){
            count++
        }
    }
    return count
}
var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result)
//   -----------------------------------------------------------
console.log("********** 4.Array reverse ***********");
function reverse(arr){
    var temp=[];
    for (let i =arr.length-1;i>=0;i--){
        temp.push(arr[i]);
    }
    arr=temp
    return arr
}
var result = reverse(["a","b","c","d","e"]);
console.log(result);
//   -----------------------------------------------------------
console.log("********** 5.Fibonacci Array ***********");
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