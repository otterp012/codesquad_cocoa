let stack = [];

let data = "[1,2,[3]]"
data = data.replaceAll("," , "");

let obj = {};


let obj = {
  "type" : "array",
  "child": stack,
}
let i = 0;
while(i < data.length) {
  if(data[i] === "[") {
    if(stack.length > 0) {
      console.log(makeObj(stack));
    }
    stack.length = 0;
    i++;
  } else if(data[i] === "]") break;
  else {
    stack.push(printNumInformation(data[i]));
    console.log(stack);
    i++;
  }
}

console.log(obj);
function typeCheck(str) {
  if(typeof(+str) === Number) return "number";
  else return "array";
}

function printNumInformation(n) {
  return {
    "type": "number",
    "value": n,
    "child": [],
  }
}