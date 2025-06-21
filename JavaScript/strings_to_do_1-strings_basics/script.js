console.log("***** 1.Remove Blanks *****");
function removeBlanks(str){
    let arr=[];
    for(let i = 0 ; i <str.length;i++){
        if(str[i]==" "){
            continue
        }
        else(arr.push(str[i]));
    }
    // insted of join()
        let noSpases= "";
        for (let i = 0; i < arr.length; i++) {
            noSpases+= arr[i];
        }
    return noSpases;
}
console.log(removeBlanks("i t's An E asy Ta sk"));
console.log(removeBlanks("s ee IT ol dYo uSo"));
// ///////////////////////////////////////////////
console.log("***** 2.Get Digits *****");
function getDigits(str){
    let arr=[];
    for(let i = 0 ; i <str.length;i++){
        if(isNaN(str[i])===true){
            continue
        }
        else(arr.push(str[i]));
    }
    // insted of join()
        let noSpases= "";
        for (let i = 0; i < arr.length; i++) {
            noSpases+= arr[i];
        }
    return noSpases;
}
console.log(getDigits("hgd6gfhg6f5h46gf84yf5548ff"));
console.log(getDigits("fs0df4fd0ss7fdsfs1dsf9fds9fds4fsd"));
// ///////////////////////////////////////////
console.log("***** 3.Acronyms *****");
function acronym(str){
    let wordArray = str.split(" ");
    let acr=[]
    for(let i =0;i<wordArray.length;i++){
        acr.push(wordArray[i][0]);
    }
    // insted of join()
    let noSpases= "";
        for (let i = 0; i < acr.length; i++) {
            noSpases+= acr[i];
        }
        noSpases= noSpases.toUpperCase();
    return noSpases;
}
console.log(acronym("She carefully painted the sunset using vibrant shades of orange."));
console.log(acronym("The cat jumped swiftly across the - roof during the storm."));
// ///////////////////////////////////////////////////////
console.log("***** 4.Count Non-Spaces *****");
function countNonSpaces(str){
    let arr=[];
    for(let i = 0 ; i <str.length;i++){
        if(str[i]==" "){
            continue
        }
        else(arr.push(str[i]));
    }
    // insted of join()
        let noSpases= "";
        for (let i = 0; i < arr.length; i++) {
            noSpases+= arr[i];
        }
        let count =  noSpases.length;
    return count;
}
console.log(countNonSpaces("He's a well-known artist, painter, and writer—very talented"));
console.log(countNonSpaces("I packed my bags, left home, and never returned"));
// //////////////////////////////////////////////////////////////
console.log("***** 5.Semove Shorter Strings *****");
function removeShorterStrings(arr,minLength){
    let long =[];
    for (let i =0;i<arr.length;i++){
        if (arr[i].length<minLength){
            continue;
        }
        else (long.push(arr[i]));
    }
    return long;
}
console.log(removeShorterStrings(['The' ,'little cat', 'jumped' ,'over', 'the', 'tall' ,'garden fence'],4));
console.log(removeShorterStrings(['She' ,'reads' ,'books', 'quietly' ,'while' ,'drinking' ,'tea' ,'in' ,'the', 'evening'],5));