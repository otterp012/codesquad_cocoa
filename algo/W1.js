

1000
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(input[0]) + Number(input[1]));

1008
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(input[0]) / Number(input[1]));

2438
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let data = input;
let star = "*";
for(let i = 1; i <= data; i++) {
    console.log(star);
    star += "*";
}

2920
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let data = [];
for(let i = 0; i < input.length; i++){
    data.push(Number(input[i]));
}

let ascending = 1;
let descending = 1;

for(let i = 0; i< data.length-1; i++) {
    if(data[i] - data[i+1] === -1) ascending++;
    if(data[i] - data[i+1] === 1) descending++;
}

if(ascending === 8) console.log("ascending");
else if(descending === 8) console.log("descending");
else console.log("mixed");

8958
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

11654
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(input[0].charCodeAt());