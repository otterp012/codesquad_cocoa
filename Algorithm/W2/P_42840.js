function solution(answers) {

    let p1 = "12345";
    let p2 = "21232425";
    let p3 = "3311224455";
    
    while(p1.length < answers.length) {
        p1 += p1;
        p2 += p2;
        p3 += p3;
    }
    
    p1 = p1.split("");
    p2 = p2.split("");
    p3 = p3.split("");
    
    p1.length = answers.length;
    p2.length = answers.length;
    p3.length = answers.length;
    
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(+p1[i] === answers[i]) cnt1++;
        if(+p2[i] === answers[i]) cnt2++;
        if(+p3[i] === answers[i]) cnt3++;
    }
    
    let max = Math.max(cnt1, cnt2, cnt3);
    
    let answer = [];
    if(cnt1 === max) answer.push(1);
    if(cnt2 === max) answer.push(2);
    if(cnt3 === max) answer.push(3);
    
    return answer;
    }

    // filter 메서드 사용해서 다시 풀어보기.