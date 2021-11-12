
// let num1 = [5, 0, 2, 7];
// let answer = 
// let tmp = [];
// for(let i = 0; i<num1.length; i++){
//     for(let j = 0; j<num1.length; j++){
//        if(i!==j) {
//            answer.push(num1[i]+num1[j]);
//        }
//     }
// }

// let newdata = new Set([...answer]);
// console.log(newdata);
// let answer = [...newdata];

// console.log(answer2);

// let answers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

// let p1 = "12345";
// let p2 = "21232425";
// let p3 = "3311224455";
// // 패턴의 반복성 때문에 .. . ?

// while(p1.length < answers.length) {
//     p1 += p1;
//     p2 += p2;
//     p3 += p3;
// }

// p1 = p1.split("");
// p2 = p2.split("");
// p3 = p3.split("");

// p1.length = answers.length;
// p2.length = answers.length;
// p3.length = answers.length;

// let cnt1 = 0;
// let cnt2 = 0;
// let cnt3 = 0;

// for(let i = 0; i < answers.length; i++) {
//     if(+p1[i] === answers[i]) cnt1++;
//     if(+p2[i] === answers[i]) cnt2++;
//     if(+p3[i] === answers[i]) cnt3++;
// }

// let max = Math.max(cnt1, cnt2, cnt3);

// let answer = [];
// if(cnt1 === max) answer.push(1);
// if(cnt2 === max) answer.push(2);
// if(cnt3 === max) answer.push(3);


// console.log(answer);
// while(p1.length <= answers.length){
//     p1 += "1234512345";
//     p2 += "2123242521";
//     p3 += "3311224455";
// }


// p1 = p1.split("");
// p2 = p2.split("");
// p3 = p3.split("");
// p1.length = answers.length;
// p2.length = answers.length;
// p3.length = answers.length;

// let point1 = 0;
// let point2 = 0;
// let point3 = 0;

// for(let i = 0; i< answers.length; i++) {
//     if(+p1[i] === answers[i]) point1++;
//     if(+p2[i] === answers[i]) point2++;
//     if(+p3[i] === answers[i]) point3++;
// }

// let max = Math.max(point1, point2, point3);
// let answer = [];
// console.log(point1, point2, point3);
// console.log(max);
// if(+point1 === max) answer.push(1);
// if(+point2 === max) answer.push(2);
// if(+point3 === max) answer.push(3);

// answer = answer.sort((a,b) => (a-b));
// console.log(answer);

//
// let a = 5;
// let b = 24;
// const day = "2016-"+a+"-"+b;
// console.log(day);
// const data = new Date(day);
// console.log(data.getDay());
// let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// let num = data.getDay();

                                                                
let board = [[0,0,0,0,0],
             [0,0,1,0,3],
             [0,2,5,0,1],
             [4,2,4,4,2],
             [3,5,1,3,1]]

             
let moves = [1,5,3,5,1,2,1,4];
let stack = [];
let cnt = 0;
for(let i=0; i<moves.length; i++) {
    let con = moves[i]-1;
    for(let j=0; j<board.length; j++) {
       if(board[j][con]) {
           stack.push(board[j][con]);
           board[j][con] = 0;
           console.log(stack.length);
           if(stack[stack.length-2] === stack[stack.length-1]) {
            cnt++;
            stack.pop();
            stack.pop();
           }
           break;
       } 
    }
}


console.log(stack);
console.log(board);
console.log(cnt);