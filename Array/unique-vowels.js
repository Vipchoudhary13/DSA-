// Write a function that takes in a string and returns the number of unique vowels in that string. 
// For example, for the input "meeting", the output should be 2 ("e", "i").

function findUniqueVowels(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = [];

    for(let char of str){
        if(vowels.includes(char)){
            uniqueVowels.push(char);
        }
    }
    // console.log('uniqueVowels', uniqueVowels)

    let obj = {};
    for(let key of uniqueVowels){
        const count = 1
        if((obj[key])===undefined){
            obj[key] = count;
        }else{
            obj[key]++;
        }
    }
    const uniqueVowelCount = Object.keys(obj).length;
    return uniqueVowelCount
}

const inputString = "Meeting";
findUniqueVowels(inputString);
// console.log(findUniqueVowels(inputString));

// T.C = O(n)
// S.C = O(n)

//-----------------------------2. by using set----------------------------------

function findUniqueVowelsBySet(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = new Set;

    for(let char of str){
        if(vowels.includes(char)){
            uniqueVowels.add(char);
        }
    }

    const uniqueVowelCount = uniqueVowels.size;
    return uniqueVowelCount;

}

// const inputString = "Meeting";
findUniqueVowelsBySet(inputString);
// console.log(findUniqueVowelsBySet(inputString));

// T.C = O(n)
// S.C = O(n)