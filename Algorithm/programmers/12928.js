function solution(n) {
    var answer = 0;
    let tmp = [];
    for(let i = 0; i <= n/2; i++) {
        if(n%i === 0) tmp.push(i);
    }
    for(let x of tmp){
        answer += x;
    }
    answer += n;
    return answer;
}