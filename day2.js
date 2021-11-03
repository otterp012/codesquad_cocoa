// 1번문제 - 컨벤션 수정
function solution(n, t, m) {
    let answer = "";
    let input = 0;
   
  
        for(let i= 0; i < t*m; i++){
            input = i.toString(n);
            answer += input;
            if(answer.length > t*m) break;
        }
        answer = answer.split("");
        answer.length = t*m;

        // length 길이를 통해서 잘라준게, 좋은방법인지 궁금    
    
        // for(let i = 0; i < t*m; i++ ) {
        //     if(answer.length <= t*m){
        //     input = i.toString(n);
        //     answer += input;
        //     }
        //     else break;
        // }
 
    return answer;
}

console.log(solution(2, 4, 2, 1));

// 2, 3번문제 - tmp로 임시 만드는거 넘 무식했나? 

function solution2(n, t, m, p) {
    let tmp = "";
    let input = 0;
    let answer = [];
  
        for(let i= 0; i < t*m; i++){
            input = i.toString(n);
            tmp += input;
            if(tmp.length > t*m) break;
        }
        tmp = tmp.split("");
        tmp.length = t*m;
        console.log(tmp);
        while(p <= t*m) {
            answer.push(tmp[p-1]);
            p = p+m;
        }
    return answer;
}

// n진법 만드는 함수 - 추가하고 싶은 것.
// A를 N진법으로 만드는 함수 
function two(a, n) {
    let sum = "";
    while(a > 0) {
        sum += a%n;
        a = parseInt(a/n);
    }

    sum = parseInt(sum.split("").reverse().join(""));
    return sum;
}
// 16진법 만드는 함수 필요함.
// 인덴팅 정리

console.log(solution(3, 3, 3));
console.log(solution2(2,4,2,2));