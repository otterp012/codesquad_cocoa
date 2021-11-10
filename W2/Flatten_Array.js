
// 객체분석 정보를 출력
// 중첩된 깊이를 분석하고 원소의 개수를 출력한다.
// 대괄호 삭제하는 정규표현식....

const data = "[1,2,[3,4,[5,[6]]]]";

// 정규식 사용하지 않으면,
// let newData ="";
// data.split("").forEach((item) => {
//     if(item === "[" || item === "]" || item === ",") {
//         newData += "";
//     } else newData += item;
// })

// const regExp = /\[.*?\]/g;

function printObjInformation(data) {
  if(isCorrectBracket(data) === "일치합니다."){
    const dataArray = data.replaceAll("," , "").split("");
    let dataDepth = 0;
    let dataElement = 0;
    dataArray.forEach((item) => {
        if(item === "[") dataDepth++;
    })
    dataElement = dataArray.length - dataDepth*2;
    return `배열의 중첩된 깊이 수준은 ${dataDepth}이며, 총 ${dataElement}의 원소가 포함되어 있습니다.`
  } else return "올바른 괄호가 아닙니다."
}
// 사실 이 함수 약간 야매풀이
// flat 재귀할때마다 count++ 올라가는 풀이 생각해보기
// + 정규표현식 더 깔끔하게 쓸 수 있는 방법에 대해 고민해보기.

console.log(printObjInformation(data));

// 2-2 stack 자료구조 활용해서.
// let trueData = "[1,2,[3,4,[5,[6]]]]";
// let falseData = "[1,2,[3,4,[5,[6]]";

// // 여는괄호가 문제인지, 닫는괄호가 문제인지 확인하는 경우 포함

function isCorrectBracket(data) {
    const stack = [];
    data = data.split("");
    data.forEach((item) => {
        if(item === "[") stack.push(item);
        else if(item === "]") stack.pop();
    })
    if(stack.includes("[")) return "닫는 괄호가 일치하지 않습니다.";
    else if(stack.includes("]")) return "여는 괄호가 일치하지 않습니다.";
    else return "일치합니다.";
}
console.log(isCorrectBracket(data));

// console.log(matchingBracket(falseData));
// console.log(matchingBracket(trueData));

