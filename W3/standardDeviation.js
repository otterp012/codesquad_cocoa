let data = [89.23, 82.03, 71.56, 78.82, 85.05, 
    84.44, 67.53, 71.70, 77.97, 73.77, 
    84.25, 67.01, 73.78, 64.19, 89.89, 
    90.32, 73.21, 75.35, 83.22, 74.01];

function getSum(arr) {
return arr.reduce(((acc, cur) => acc + cur), 0);
}

function getMean(arr) {
return getSum(arr)/arr.length;
}

function getDistance(arr) {
return arr.reduce((acc, cur) => acc+ Math.abs(cur-getMean(arr))**2 , 0)/arr.length;
}

function getStandardDeviation(arr) {
return Math.sqrt(getDistance(arr));
}


// let sum = 0;
// for(let x of data) {
//   sum += Math.pow(Math.abs(x-getMean(data)),2);
// }
// distance 확인용 for문

// 70-80점 사이의 값을 가지는비율은 얼마인가?

const average = getMean(data);
const standardDeviation = getStandardDeviation(data);

const min = Math.abs((70 - average))/standardDeviation;
const max = Math.abs((80 - average))/standardDeviation;

console.log(min, max);

// 소수 둘째자리 반올림.
// min은 정규분포표 1.03 이고,
// 1.02은 0.3485을 말함.
// 평균기준 왼편으로 0.3485의 부분을 min이 가짐.

// max의 정규분포는 0.28
// 0.28은 정규분포표로 0.1103
// 다시말해 평균 오른쪽 방향으로 0.1103부분은 max가 가짐

// (min + max) *100 이 70과 80사이의 비율을 말하게 되므로
// 답은, 45%임.

// https://otterpjoe.notion.site/MISSION5-GRADES-da441d82f22046649a63e8c9ce0aff88
