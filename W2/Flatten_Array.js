const data = "[1,2,[3,4,[5,[6]]]]";

// 받은 피드백
/* 숫자가 2자리 이상일 경우를 대비해 ","를 지우는 방식이 아니라,
  ,를 통해 split 또는 join 하는 방법을 생각해야함.
   두자리 이상인 경우에 ","를 지우는 방식은 오류가 남! */
   // -> 해결, 원소의 숫자는 ","의 개수 +1임


// ] 닫는괄호가 처음에 나오는 경우 오류를 리턴해야함. (해결) if문 하나 추가함.
console.log(data.split(""));
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

console.log(printObjInformation(data));
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
console.log(isCorrectBracket(data));