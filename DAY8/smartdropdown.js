// 클로저, debounce의 개념 사용 못함
const $tittle = document.querySelector('.tittle');
const $fruits = document.querySelectorAll('.fruits');
const $subTittle = document.querySelector('.sub-tittle');


let timer;

$tittle.addEventListener('mouseout', () => {
    clearTimeout(timer);
});

$tittle.addEventListener('mouseover', () => {
    timer = setTimeout(() => {
        $fruits.forEach((node) => {
            node.classList.remove('hidden');
        })

        $subTittle.classList.add('hidden');
    }, 1000)
})

const counterMap = new Map();
$fruits.forEach((fruit) => {
    fruit.id = fruit.textContent;
    counterMap.set(fruit.id, 0);
})

let fruitTimer;

$fruits.forEach((fruit) => {
    fruit.addEventListener(('mouseover'), () => {
        fruitTimer = setTimeout(function addFruit() {
            counterMap.set(fruit.id, +counterMap.get(fruit.id)+1);
            printMap(counterMap);
            fruitTimer = setTimeout(addFruit, 500);
        }, 500);
    })

    fruit.addEventListener(('mouseout'), () => {
        clearTimeout(fruitTimer);
    })
})

function printMap(map) {
    const $texts = document.querySelectorAll('.text');
   
    $texts.forEach((text, index) => {
       text.textContent = [...map][index];
    })
    
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