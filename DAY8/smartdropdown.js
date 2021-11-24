// 클로저, debounce의 개념 사용 못함


const tittle = document.querySelector('.tittle');
const fruits = document.querySelectorAll('.fruits');
const conunterContainer = document.querySelector('.counter-container');

tittle.addEventListener('mouseout', () => {
    clearTimeout(timer);
    console.log("중단됨");
});

tittle.addEventListener('mouseover', () => {
    timer = setTimeout(() => {
        fruits.forEach((node) => {
            node.classList.remove('hidden');
        })
    }, 1000)
})

const map = new Map();
fruits.forEach((fruit) => {
    fruit.id = fruit.textContent;
    map.set(fruit.id, 0);
})

let fruitTimer;

fruits.forEach((fruit) => {
    fruit.addEventListener(('mouseover'), () => {
        fruitTimer = setTimeout(function addFruit() {
            map.set(fruit.id, +map.get(fruit.id)+1);
            printMap(map);
            fruitTimer = setTimeout(addFruit, 500);
        }, 500);
    })

    fruit.addEventListener(('mouseout'), () => {
        clearTimeout(fruitTimer);
        console.log("과일추가 중단됨");
    })
})

function printMap(map) {
    const texts = document.querySelectorAll('.text');
    for(let i = 0; i < [...map].length; i++){
        texts[i].textContent = [...map][i];
    }
}



// for(let i = 0; i < 6; i++){
//     conunterContainer.appendChild(document.createElement('p'));
// } 동적생성 안하고 그냥 만들어두기로.

// https://www.youtube.com/watch?v=F2zF8fu7aG0

// 이런 코드를 짜면, scroll이벤트가 계속해서 일어나
// 콘솔이 숫자가 계속해서 올라감.
// debounce say let's minimize the amount of time that the scroll 
// event 

// we can optimize the number of API calls that actually end up getting made by 
// debounce -> 다른 이벤트가 생기면 reset timer

// function isMouseOverd(node) {
//     return node.classList.contains('mouseoverd');
// }
// tittle.addEventListener(('mouseover'), () => {
//     tittle.classList.add('mouseoverd');
// })

// tittle.addEventListener(('mouseout'), () => {
//     tittle.classList.remove('mouseoverd');
// })

// const debounce = (callback, delay) => {

//     let timerID;
//     // timerID 클로저로 이용됨.
//     return event => {
//         // console.log(event);
//         // mouseevent
//         if(!event) {
//             clearTimeout(timerID);
//         }
//         // timerID의 값이 존재하면 -> timerID를 멈춘다.
//         timerID = setTimeout(callback, delay, event);
//         console.log(timerID);
//     }
// }