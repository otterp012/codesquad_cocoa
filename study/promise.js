
// // Promise is a JavaScript Object for asychronous operation.
// // 1. state : 프로미스가 기능 수행중인지, 성공했는지, 실패했는지
// // pending -> fulfilled (성공, 완료) or rejected 
// // 2. producer & consummer : 제공자와, 제공된 데이터를 쓰는 사람의 차이점 인지하기.
// // Producer vs Consumer

// // 1. Producer
// const promise = new Promise((resolve, reject) => {
//     // 비동기로 진행하고 싶은 코드 적는 부분.
//     setTimeout(() => {
//        resolve("its good");
//        reject(new Error("에러 발생"));
//     }, 2000)
// });
// // 어떤일을 2초정도하다가, resolve 라는 콜백함수를 전달해주는.


// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );
// promise.then(
//     error => console.log(error)
// )
// // 1. promise를 만든 순간 바로, 안에 콜백함수가 바로 수행된다.
// // -> 만약 네트워크 요청을 사용자가 요구할때만 해야하는 경우라면(ex)버튼 눌렀을때
// // -> 이런식으로 작성하면 불필요한 네트워크가 발생함

// // 2. Consumers: then, catch, finally
// // resolve('ellie') => value
// // resolve안의 값이 value의 파라미터로 전달됨.

// promise
//     .then((value) => {
//         console.log(value);
// }) // 여기서, value는 resolve(value)에서 value가 들어옴. // return된 값에 catch되는 것
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
// // 값을 바로 전달해도 되고, 비동기인 promise를 전달해도 되는구나!


// // Error Handling
// // promise 3ro,

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

// // getHen()
// // .then(hen => getEgg(hen)) // .then(getEgg) 로 축약가능
// // .then(egg => cook(egg))
// // .then(meal => console.log(meal));

// getHen()
// .then(getEgg)
// .then(cook)
// .then(console.log);



// userStorage.loginUser(id, password) // loginUser로, id와 password를 받아오면,
// .then(userStorage.getRoles) // .then(user => userStorage.getRoles(user)) 생략구문
// .then(user => console.log(`${user.name}`))
// .catch(console.log);
// // Callback Hell example

  class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
          ) {
            resolve(id);
          } else {
            reject(new Error('not found'));
          }
        }, 2000);
      });
    }
  
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'ellie') {
            resolve({ name: 'ellie', role: 'admin' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
