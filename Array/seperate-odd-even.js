
// input = [12,34,45,9,8,90,3]
// output = [12,34,8,90,45,9,3]
// Explanation = even numbers should come first then odd numbers
// in the output, the order can be changed, i.e., in the above example, 34 can come before 12 and
// 3 can come before 9.

//-------------------------------------1. Brute Force------------------------------------------

let arr = [12,34,45,9,8,90,3];

function findEvenOdd(arr){
    let even = [];
    let odd = [];
    let ans = []

    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    // console.log(even+','+odd)
    for(let i=0; i<even.length; i++){
        ans.push(even[i])
    }
    for(let i=0; i<odd.length; i++){
        ans.push(odd[i])
    }
    return ans
}

findEvenOdd(arr)
// console.log(findEvenOdd(arr))

// T.C = O(n)
// S.C = O(n)


//------------------------------------2. 2-pointer---------------------------------------------

function segregateEvenOdd(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        while(arr[left]%2===0 && left<right){
            left++;
        }
        while(arr[right]%2===1 && left<right){
            right--;
        }
        if(left<right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr
}

segregateEvenOdd(arr)
console.log(segregateEvenOdd(arr))


// T.C = O(n)
// S.C = O(1)