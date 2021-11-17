const myReduce = (arr, callback, initialValue) => {
    let acc = callback(initialValue, arr[0]);
    for(let i = 1; i<arr.length; i++){
        acc = callback(acc, arr[i]);
    }
    return acc;
}

console.log(myReduce);
// function myReduce(arr, callback, initialValue) {
//     let acc = callback(initialValue, arr[0]);
//     for(let i = 1; i<arr.length; i++){
//         acc = callback(acc, arr[i]);
//     }
//     return acc;
// }

console.log(myReduce([1,2,3,4] , (a,b) => (a+b) , 1));


// 프로토타입으로 만들기
function Calcuate(a, b) {
    this.a = a;
    this.b = b;
  }
  
  Calcuate.prototype.add = function() {
    return console.log(this.a + this.b);
  }
  const ex = new Calcuate(2,3);
  ex.add();
  
  
  
  // 클래스로 만들기
  class Example {
    constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  
  add() {
    console.log(this.a + this.b);
  }
  }
  
  const me = new Example(2,3);
  console.log(me);
  // class의 constructor가 호출됨
  // 생성자 new가 constructor이 불리고,
  // 그 안에 this로 할당된 a와 b가 객체를 만들기 위한 내부 객체가 됨
  // add 또한 this에 할당이 되고 나서 construtor에서 보이진 않지만 return this가 됨.
  
  
  // this는 선언될때 정해지는 것이 아니고,
  // 호출될때 정해지는 것이다.
  // - call apply bind
  // 실행 컨텍스트 관점에서..!
  // 앞으로의 미션에서도 class정도는 사용해서 구현하는 것이 좋습니다.
  
  
  me.add();
  
  // 프로토타입과 class, this