
// Check given integer is even or odd [ without using / , % ]


function isEven(num) {
    // Check the least significant bit
    // If the LSB is 0, then the number is even; otherwise, it's odd
    return (num & 1) === 0;
}

let num = 12;
if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}

// T.C = O(1)
// S.C = O(1)