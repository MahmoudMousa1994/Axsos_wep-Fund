function two_Sum(nums, target){
    var sums = []; 
    for(var i=0;i<nums.length;i++){
        var remain=target-nums[i];
        for(var j=0;j<nums.length;j++){
            if(remain===nums[j]){
                sums.push(i,j);
                return sums;
            }
        }
    }
}
console.log(two_Sum([42, 62, 855, 565,56], 627));
