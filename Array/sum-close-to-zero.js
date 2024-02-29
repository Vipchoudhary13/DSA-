//Explanation = find Two elements whose some close to zero (0)

//------------------------------------1. Brute force-----------------------------------------------
let arr = [1,2,6,9,-5,-2];

function minAbsSumPair(arr){
    if(arr.length<2){
        console.log("Invalid Input")
        return 
    }
    let min_l = 0;
    let min_r = 1;
    let min_sum = arr[min_l]+arr[min_r];
    
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            let sum = arr[i]+arr[j];
            if(Math.abs(min_sum)>Math.abs(sum)){
                min_sum = sum;
                min_l = i;
                min_r = j;
            }
        }
    }
    // console.log(arr[min_l], arr[min_r]);
    let ans = [arr[min_l], arr[min_r]].join(",")
    return ans
}

minAbsSumPair(arr)
console.log(minAbsSumPair(arr))