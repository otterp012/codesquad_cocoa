
// 1번 문제, 팩토리얼 -> forEach로 다시 만들어보기.
function calculate(n) {
    let answer = [];
    let input = 1;
    for(let i = 1; i <= n; i++){ 
        input *= i;
        answer.push(input);
    }
    return answer;
}

// console.log(calculate(4));
// [1, 2, 6, 24];


// 2번문제 배열 거르기.
// 정규표현식을 사용할지, 말지?
// 정규표현식을 사용하지 않는다면, 특수문자를 확인할 방법이 무엇이 있을가에 대해 생각해보기.

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

function hadleIterationUseFor(arr) {
    let answer = [];
    for(let x of arr) {
        if(checkSpecialMarks(x)) {
            answer.push(x);
        }
    }
    answer = removeNumber(answer);
    return answer;
}

// console.log(hadleIterationUseFor(peoples));
// 특수 문자 체크 

function checkSpecialMarks(str) {
    const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if(regExp.test(str)) return true;
    else return false;
}

// 출처: https://curryyou.tistory.com/208 [카레유]

// 배열의 모든 요소의 숫자를 제거해주는 함수.
function removeNumber(arr) {
    const regExp = /[0-9]/g;
    let answer = arr;
    for(let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].replace(regExp, "");
    }
    return answer;
}

// 3번문제

const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

// 3-1번 각 학생의 평균 점수 구하기.
const averageGrades = [];
const bestGrades = [];
for(let i = 0; i < grades.length; i++) {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for(let j = 0; j < grades[0].length; j++) {
        sum += grades[i][j];
        
        if(grades[i][j+1] > grades[i][j]) {
            max = grades[i][j+1];
        }
    }
    averageGrades.push(sum/3);
    bestGrades.push(max);
}

let average = 0;

for(let i = 0; i < averageGrades.length; i++) {
    average += averageGrades[i]/averageGrades.length;
}


// console.log(averageGrades); // 각 학생의 평균점수
// console.log(bestGrades);    // 각 학생의 최고점수
// console.log(Math.max(...bestGrades)) // 모든 학생 중 최고점수
// console.log(average); // 모든 학생의 평균 점수


// 4번 문제 - isNaN();
// Javascript에서 객체의 key, value 순회하기
// http://www.gisdeveloper.co.kr/?p=6188
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

let tmp = Object.keys(data);

let answer = [];
for(let i = 0; i < Object.keys(data).length; i++) {
    for(let [key, values] of Object.entries(data[`${tmp[i]}`])) {
        if(!isNaN(values)) {
            answer.push(key);
        }
    }
}

// console.log(answer);

console.log(1);
