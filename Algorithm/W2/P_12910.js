function solution(arr, divisor) {
    var answer = [];
    for(let x of arr) {
        if(!(x%divisor)) answer.push(x);
    }
    if(answer.length)  answer = answer.sort((a,b) => (a-b));
    else return answer = [-1];
    return answer;
}