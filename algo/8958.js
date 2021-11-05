// 8958

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = input[0];
let arr = [];

for(let i = 1; i< input.length; i++) {
    if (input[i] !== '') {
        arr.push(input[i].split(' '));
      }
}
arr = arr.flat();


function solution(str) {
    let tmp = 1;
    let sum = 0;
    for(let i =0; i<str.length; i++) {
    if(str[i] === "O") {
        sum += tmp;
        tmp++;
    } else {
        tmp = 1;
    }
}
    return sum;
}

for(let x of arr) {
    console.log(solution(x));
}
