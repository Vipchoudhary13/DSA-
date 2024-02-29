

// input = [3,3,4,2,4,4,2,4,4]
// output = 4
// Explanation = the frequency of 4 is 5 which is grater than the half of the size of the array size

// input = [3,3,4,2,4,4,2,4]
// output = no majority element
// explanation = there is no element whose frequency is grater than half of the size of the array size

//-------------------------------1. Brute Force Method----------------------------------
let arr = [3,3,4,2,4,4,2,4,4]
// let arr = [13,13,14,12,14,14,12,14]
let n = arr.length;
let half = Math.floor(n/2)

function findMajority(arr, n){
    let maxCount = 0;
    let index = -1;

    for(let i=0; i<n; i++){
        let count=0;
        for(let j=0; j<n; j++){
            if(arr[j]===arr[i]){
                count++;
            }
        }
        if(count>maxCount){
            maxCount=count
            index=i
        }
    }
    if(maxCount>n/2){
        // console.log(arr[index])
        return arr[index]
    }else{
        // console.log('No Majority Element')
        return 'No Majority Element'
    }
}

findMajority(arr, n)
// console.log(findMajority(arr, n))

// T.C = O(n2)
// S.C = O(1)


//---------------------------------2. Sorting Approach---------------------------------------------

// arr.sort();
function findMajorityBySorting(arr){
    let majorityElement = -1
    for(let i=0; i<=half; i++){
        if(arr[i] === arr[i+arr[half]]){
            majorityElement = arr[i]
        }else{
            majorityElement = 'No Majority Element'
        }
    }
    return majorityElement
}

findMajorityBySorting(arr, n)
// console.log(findMajorityBySorting(arr))

// T.C = O(n.log(n))
// S.C = O(1)


//------------------------------------3. HashMap/object Method-----------------------------------

function findMajorityByObject(arr){
    let obj={};
    let majorityElement = null
    let maxCount = -1
    for(let key of arr){
        let count = 0;
        // console.log('key', key, obj[key])
        if(obj[key] === undefined){
            obj[key]= count++;
            obj[key]++
        }else{
            obj[key]++
        }
        // console.log('key after', key, obj[key])
    }
    console.log('obj', obj)

    for(let key in obj){
        if(obj[key]>maxCount){
            majorityElement = key
            maxCount = obj[key]
        }
    }

    if(maxCount>half){
        return majorityElement;
    }else{
        return 'No Majority Element'
    }
}

findMajorityByObject(arr)
// console.log(findMajorityByObject(arr))

// T.C = O(n)
// S.C = O(n)


//----------------------------------4. Moore-Voting Algo --------------------------------

function findMajorityByMoore(arr, n){
    let maxIndex = 0;
    let count = 1;

    for(let i=1; i<n; i++){
        if(arr[maxIndex]===arr[i]){
            count++;
        }else{
            count--;
        }

        if(count===0){
            maxIndex=i;
            count=1;
        }
    }
    // console.log('find =>', arr[maxIndex], maxIndex)
    // return arr[maxIndex]    
    // if we have to find majority element without grater than half then we can stop here


    let finalCount = 0;
    let element = arr[maxIndex]
    for(let i of arr){
        if(element===i){
            finalCount++;
        }
    }
    if(finalCount>half){
        return element
    }else{
        return 'No Majority Element'
    }
}

findMajorityByMoore(arr, n)
console.log(findMajorityByMoore(arr, n))

// T.C = O(n)
// S.C = O(1)