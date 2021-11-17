// const data = "[1,2,[3,4,[5,[6]]]]";

// 받은 피드백
/* 숫자가 2자리 이상일 경우를 대비해 ","를 지우는 방식이 아니라,
  ,를 통해 split 또는 join 하는 방법을 생각해야함.
   두자리 이상인 경우에 ","를 지우는 방식은 오류가 남! */
   // -> 해결, 원소의 숫자는 ","의 개수 +1임


// ] 닫는괄호가 처음에 나오는 경우 오류를 리턴해야함. (해결) if문 하나 추가함.

function printObjInformation(data) {
  if(isCorrectBracket(data) === "일치합니다.") {
    let dataDepth = 0;
    let dataElementNumber = 0;
    // 괄호 매칭 문제가 없는 경우에만 작동
    data.split("").forEach((item) => {
      if(item === "[") dataDepth++;
      else if(item === ",") dataElementNumber++;
    })
    return `배열의 중첩된 길이 수준은 ${dataDepth}이며,
          총 ${dataElementNumber+1}개의 원소가 포함되어 있습니다.`;
  } else return `올바른 괄호가 아닙니다.`;
}

// JSON.parse() 공부하기!

// console.log(printObjInformation(data));

function isCorrectBracket(data) {
  const stack = [];
  data = data.split(""); 
  if(data[0] === "]") return "잘못된 괄호입니다." 
  else {
    data.forEach((item) => {
      if(item === "[") stack.push(item);
      else if(item === "]") stack.pop();
    })
  }
  if(stack.includes("[")) return "닫는 괄호가 일치하지 않습니다.";
  else if(stack.includes("]")) return "여는 괄호가 일치하지 않습니다.";
  else return "일치합니다.";
}
// console.log(isCorrectBracket(data));


// 3번 문제
// 정석적인 접근
// tokenizer, lexer, parser 순서대로.
// 공부도 겸사겸사

let data = "[1,2,[3]]";
data = data.split("");
console.log(data);

// 여기까지 tokenizer, 의미있는 토큰들로 나눔 
// 토큰정보가 모여있는 배열이 반환됨.

const lexer = {
  "[" : "array",
  "]" : "close",
  "," : "comma"
};

const root = {
  type: "array",
  child: [],
}
let depth = 0;
let stack = [];
// ,면 stack에 들어가게.
let obj = {};


function lex(str) {
  if(str === "[") {
    return {
      type: "array",
      child: [],
    }
  } else if(!isNaN(+str)) {
    return {
      type: "number",
      valut: +str,
      child: [],
    }
  }
}


console.log(lex(2));


// function number(str){
//   if(!isNaN(+str)) {
//     return {
//       type: "number",
//       value: +str,
//       child: [],
//     }
//   }
// }

// console.log(number(1));