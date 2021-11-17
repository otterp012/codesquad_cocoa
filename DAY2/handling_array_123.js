
function calculate(n) {
    let answer = [];
    let input = 1;
    for(let i = 1; i <= n; i++){ 
        input *= i;
        answer.push(input);
    }
    return answer;
}

// 2번문제 배열 거르기.

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

// for문을 사용한 방법
function hadleIterationUseFor(arr) {
    let answer = [];
    for(let x of arr) {
        if(checkSpecialMarks(x)) {
            answer.push(x);
        }
    }
    return answer;
}

function checkSpecialMarks(str) {
    const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if(regExp.test(str)) return true;
    else return false;
}

function checkNumbers(str) {
    const regExp = /[0-9]/g;
    if(regExp.test(str)) return true;
    else return false;
}

// 배열 고차함수를 사용한 방법.

function filterId(arr) {
    const regExpSpecial = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const regExpNum = /[0-9]/g;
    arr = arr
        .filter(item => !(regExpSpecial.test(item)))
        .map(item => item.replace(regExpNum, ""));
    return arr;
}
console.log(filterId(peoples));



// 출처: https://curryyou.tistory.com/208 [카레유] (정규표현식)


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

// 배열 고차 함수를 이용해서 다시 풀어봄

{
let average = [];
let maxes = [];
grades.forEach(items => {
    let sum = 0;
    let max = Number.isSafeInteger();
    items.forEach(item => {
        sum += item;
        max = Math.max(max, item);
    })
    average.push(sum/items.length);
    maxes.push(max);
})
}
// 훨씬 문제가 간단해짐.
