// 2920
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