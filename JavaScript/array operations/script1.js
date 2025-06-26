console.log("********1.Accessing Elements*********");
//1. Accessing Elements
assignment1();
function assignment1() {
    let colors=["red","blue","green","yellow","purple"];
    console.log(colors[0],colors[colors.length-1]);
    console.log(colors[1]);
    colors[2]="orange";
    console.log(colors);
}
// 2 Traversing an Array
console.log("*********2.Traversing an Array*********");
assignment2();
function assignment2(){
    // a:-
    let numbers =[10,20,30,40,50];
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
}
console.log("*********2.Traversing an Array revese*********");
    // b:-
    for(let i=numbers.length-1;i>=0;i--){
        console.log(numbers[i]);
}    
}
// 3 Searching in an Array
console.log("*********3.Searching in an Array***********");
assignment3();
function assignment3(){
    let numbers= [5, 10, 15,1, 20, 25,30,50,25];

if (numbers.includes(25)) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 25) {
            i++
            console.log("Found at position " + i);
        }
    }
} else {
    console.log("Not Found");
}
}
// 4 Sorting Array
console.log("**********4.Sorting Array***********");
assignment4();
function assignment4(){
    let scores = [50,20,70,10,40];
    // ascending order
    scores.sort((a,b)=>a-b);
    console.log(scores);
    // descending order
    scores.sort((a,b)=>b-a);
    console.log(scores);
    // b:- alphabrtical order
    let names=["Shatha","Sara","Lina","Sami","Dalia"];
    names.sort();
    console.log(names); 
}
// 5 inserting elements
console.log("*********5.inserting elements***********");
assignment5();
function assignment5(){
    let animals=["dog","cat","rabbit"];
    animals.push("elephant");
    animals.unshift("lion");
    animals.splice(2,0,"tiger");
    console.log(animals);
}
// 6.deleting element
console.log("*********6.deleting element***********");
assignment6();
function assignment6(){
    let fruits=["apple","banana","cherry","date"];
    fruits.shift();
    fruits.pop();
    fruits.shift();
    console.log(fruits);
}
// 7.combining arrays
console.log("*********7.combining arrays***********");
assignment7();
function assignment7(){
    let array1=[1,2,3];
    let array2=[4,5,6];
    let combined=[];
    for(let i=0;i<array1.length;i++){
        combined.push(array1[i]);
    }
    for(let i=0;i<array1.length;i++){
        combined.push(array2[i]);
    }
    console.log(combined);
}
// 7.combining arrays.....another method
console.log("*********7b.combining arrays.....another method***********");
assignment7b();
function assignment7b(){
    let array=[
        [1,2,3],
        [4,5,6]];
        let combined=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            combined.push(array[i][j]);
        }
    }
    console.log(combined);
}
// 8.splitting an array
console.log("*********8.splitting an array***********");
assignment8();
function assignment8(){
    let items=["a","b","c","d","e"];
    let first=[]
    let seconed=[];
    for(let i=0;i<3;i++){
        first.push(items[i]);
    }
    for(let i=3;i<items.length;i++){
        seconed.push(items[i]);
    }
    console.log(first,seconed);
}
// 9.flitering elements
console.log("*********9.flitering elements***********");
assignment9();
function assignment9(){
    let numbers=[1,5,10,15,20,25,30];
    let greater15=[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>15){
            greater15.push(numbers[i]);
        }
    }
    console.log(greater15);
}
// 10.advanced challenge (a) no_duplicate
console.log("*********10.advanced challenge (a) no_duplicate***********");
assignment10();
function assignment10(){
    let arr=[1,2,2,3,4,4,5];
    let no_duplicate=[];
    for(let i=0;i<arr.length;i++){
        if(no_duplicate.includes(arr[i])==true){
            continue
        }
        else{
            no_duplicate.push(arr[i]);
        }
    }
    console.log(no_duplicate);
}
// 10.advanced challenge (b) rotate
console.log("*********10.advanced challenge (b) rotate***********");
assignment10b([1,2,3,4,5],2);
function assignment10b(arr,n){
    // let arr=[1,2,3,4,5];
    let rotate=[];
    for(let i=arr.length-n;i<arr.length;i++){
        rotate.push(arr[i]);
    }
    for(let i=0;i<arr.length-n;i++){
        rotate.push(arr[i]);
    }
    console.log(rotate);
}
// bonus challenge
console.log("*********bonus challenge***********");
bonus_challenge();
function bonus_challenge(){
    let array=[
        [1,3,5],
        [2,4,6]];
        let combined=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            combined.push(array[i][j]);
        }
    }
    console.log(combined);
    // iam stuck on sorting without using bulit-in sort()
}
