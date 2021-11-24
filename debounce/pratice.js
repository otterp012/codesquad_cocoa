let count = 0;


let incrementCount = () => {
    console.log(count++);
}

const debounce = (fn, delay) => {
    let timer;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

incrementCount = debounce(incrementCount, 1000)

window.addEventListener('mouseover', incrementCount);
// 이렇게 바꿔주면, ㅇ이벤트발생후 1초 뒤에 다른 이벤트가 없으면, 이벤트가 발생됨