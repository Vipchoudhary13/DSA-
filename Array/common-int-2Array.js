// find the one integer which is common in both arrays.
// Note: There is always one interge common in both arrays.

function runProgram(input) {
    input = input.trim().split("\n");
    
    let testcases = Number(input[0]);
    let arr1 = [];
    let arr2 = [];
    let n; 
    let index=1
    for(let i = 0; i < testcases; i++){
        n = +input[index];
        index++;
        arr1 = input[index].trim().split(" ").map(Number);
        index++;
        arr2 = input[index].trim().split(" ").map(Number);
        index++;

        let ans;
        for(let el of arr1){
            if(arr2.includes(el)){
                ans=el
            }
        }
        console.log('arr1', arr1)
        console.log('arr2', arr2)
        console.log(ans)
    }

  }

  if (process.env.USERNAME === "vipul") {
    runProgram(`3
    3
    4 5 7
    9 2 5
    2
    4 3
    3 8
    3
    11 12 15
    12 48 78`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }




