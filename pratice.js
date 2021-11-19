// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// const subjects = ["국어", "영어", "수학", "사회", "과학"];
// const data = [];
// const question = new Promise((resolve, reject) => {
//     rl.question(`과목명을 입력하시고, 점수를 입력해주세요. .\n그만하시려면 "그만"을 입력해주세요.\n ex)수학 100 `, (subjectinput) => {
//         resolve(input);
//     })
// }) 

// const answer = new Promise((resolve, reject) => {
//     rl.on("line", (gradeinput) => {
//         resolve(gradeinput);
//     });
// }) 

// const suspend = new Promise((resolve, reject) => {

// })

let arr = [21, 6, 47, 3];



function solution(x1, v1, x2, v2){
let answer;
let location1 = x1;
let location2 = x2;

if(v1 <= v2) answer = "NO";
else {
    while(location2 <= Number.MAX_SAFE_INTEGER) {
        location1 += v1;
        location2 += v2;

        if(location1 === location2) {
            answer = "YES";
            break;
        } else if(location1 > location2) {
            answer = "NO";
            break;
        }
    }
}
return answer;
}
// MAX.SAFE.INTEGER을 사용하는 방법은 TIMEOUT.
// 이거, 상한선이 주어져 있지 않아서.
// -> 다른 규칙성을 발견해야함.
console.log(solution(21, 6, 47, 3));
