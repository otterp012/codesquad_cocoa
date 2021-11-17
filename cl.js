// forEach

function forEach(arr, fn) {
    if(Array.isArray(arr)) {
        for(let i = 0; i <arr.length; i++) {
            fn(arr[i]);
        }
    }
    return;
}

const print = element => console.log(element);

let array = [1, 2, 3, 4, 5];
console.log(forEach(array, print));

function map(arr, fn) {
    if(Array.isArray(arr)) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        answer.push(fn(arr[i]));
    }
}
    return answer;
}

function Reduce(arr, fn) {
    let accValue = arr[0];
    let curValue;
    for(let i = 1; i<arr.length; i++) {
        
    }
}

