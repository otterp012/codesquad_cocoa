// 2438

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let data = input;
let star = "*";
for(let i = 1; i <= data; i++) {
    console.log(star);
    star += "*";
}
