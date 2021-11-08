// 1번문제
function printNumberNotation(notation, lastNumber, people) {
    let answer = "";
        for(let i= 0; i < lastNumber*people; i++){
            answer += i.toString(notation);
        }
        answer = answer.split("");
        answer.length = lastNumber*people;
    return answer;
}

// 2, 3번문제 
function findSquence(notation, lastNumber, people, squence) {
    let tmp = "";
    let answer = [];
        for(let i= 0; i < lastNumber*people; i++){
            tmp += i.toString(notation);
        }
        tmp = tmp.split("");
        tmp.length = lastNumber*people;

        while(squence <= lastNumber*people) {
            answer.push(tmp[squence-1]);
            squence = squence+people;
        }
    answer = answer.join("").toUpperCase();
    return answer;
}

// 16진법까지 적용되는, 진수변환기 만들어보기.
function two(a, n) {
    let sum = "";
    while(a > 0) {
        sum += a%n;
        a = parseInt(a/n);
    }

    sum = parseInt(sum.split("").reverse().join(""));
    return sum;
}
