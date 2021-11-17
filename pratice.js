
// Promise is a JavaScript Object for asychronous operation.
// 1. state : 프로미스가 기능 수행중인지, 성공했는지, 실패했는지
// pending -> fulfilled (성공, 완료) or rejected 
// 2. producer & consummer : 제공자와, 제공된 데이터를 쓰는 사람의 차이점 인지하기.
// Producer vs Consumer

// 1. Producer
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("its good");
//        reject(new Error("에러 발생"));
//     }, 2000)
// });

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );
// promise.then(
//     error => console.log(error)
// )
// 1. promise를 만든 순간 바로, 안에 콜백함수가 바로 수행된다.
// -> 만약 네트워크 요청을 사용자가 요구할때만 해야하는 경우라면(ex)버튼 눌렀을때
// -> 이런식으로 작성하면 불필요한 네트워크가 발생함

// 2. Consumers: then, catch, finally
// resolve('ellie') => value
// resolve안의 값이 value의 파라미터로 전달됨.

// promise
//     .then((value) => {
//         console.log(value);
// })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => console.log('finally'))


//     // 3. Promise chaining
// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// fetchNumber
// .then(num => num*2)
// .then(num => num*3)
// .then(num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num - 1), 1000)
//     })
// })
// .then(num => console.log(num));

// // then은 값을 전달할 수 도있고, promise를 전달할 수도 있다.


// // Error Handling

// const getHen = () => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('chic'), 1000);
//     });
// const getEgg = hen =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => egg`), 1000);
//     });
// const cook = egg =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => fried`), 1000);
//     });

// getHen()
// .then(hen => getEgg(hen)) // .then(getEgg) 로 축약가능
// .then(egg => cook(egg))
// .then(meal => console.log(meal));


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const subjects = ["국어", "영어", "수학", "사회", "과학"];
const data = [];
const question = new Promise((resolve, reject) => {
    rl.question(`과목명을 입력하시고, 점수를 입력해주세요. .\n그만하시려면 "그만"을 입력해주세요.\n ex)수학 100 `, (subjectinput) => {
        resolve(input);
    })
}) 

const answer = new Promise((resolve, reject) => {
    rl.on("line", (gradeinput) => {
        resolve(gradeinput);
    });
}) 

const suspend = new Promise((resolve, reject) => {

})
