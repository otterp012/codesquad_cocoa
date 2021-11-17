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

// let tmp = Object.keys(data);

// let answer = [];
// for(let i = 0; i < Object.keys(data).length; i++) {
//     for(let [key, values] of Object.entries(data[`${tmp[i]}`])) {
//         if(!isNaN(values)) {
//             answer.push(key);
//         }
//     }
// }
// for(let x in data) {
//     for(let [key, value] of Object.entries(data[x])){
//         console.log([key, value]);
//         if(typeof(value) === 'number') answer.push(key);
//     }
//  }

// 반복문을 이용한 풀이.


