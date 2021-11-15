
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let answer = [];

let data = [];
rl.on('line', (input) => {
  count += 1;
  data.push(input);
  if (count === 5) {
    tmp(data);
    rl.close();
  }
});
// 비동기 특성 때문에 다른 언어들처럼 표준 입력을 통해 들어온 값을 어떤 변수에 저장해두고 사용하는 것이 아니라 바로 콜백 함수에 넘겨주는 방식으로 활용하는 것이 편리하다 


// rl question으로 물어보는 질문이 안먹히는이유 -> line 안써서..
// 질문을 꼭 넣고 싶은데, , , ,?


function tmp(data) {
  let subjects = ["국어", "영어", "수학", "사회", "과학"];
  for(let i = 0; i < data.length; i++) {
    answer.push([subjects[i], data[i]]);
  }
  answer = answer.sort((a,b) => (a[1] - b[1]));
  return console.log(answer);
}

// https://zxchsr.tistory.com/27 다차원 배열 정렬
