function longestCommonPrefix(array){
    var prefix="";
    for (var i =0;i<array[0].length;i++){
        var letter =array[0][i];
        for (var j =1;j<array.length;j++){
            if (array[j][i]!== letter){
                return prefix;
            }
        }
        prefix+= letter
    }
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))