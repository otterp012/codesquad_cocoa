// 비동기 프로그래밍의 첫 시작, 콜백

// JavaScript is synchronous.
// Excute the code block in order after hoisting.
// hoisiting: var, function declaration 제일 위로 올라가는 것.
// 호이스팅 이후, 코드가 런타임으로 실행된다.

// 비동기는 언제 코드가 시작되는지 알 수 없다.
console.log('1');

setTimeout(() => console.log('2'), 1000)
// 브라우저 api
// setTimeout

console.log('3');


// Sychronous Callback - 동기
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous Callback

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'drean') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    } 
    // 성공하면 onSuccess / 실패하면 onError 콜백
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess ({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,
                      password, 
                      (user) => {
                            userStorage.getRoles(
                                user, 
                                userWithRole => {
                                    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
                                },
                        error => {}
                        );
                      }, 
                      (error) => {
                          console.log(error);
                      }
                      );
// 이러한 콜백 체인의 문제점, 콜백지옥
// 콜백지옥의 문제점
// 1. 가독성이 너무 많이 떨어짐..!
// 2. 문제분석 힘듦
// 3. 유지보수 힘듦
