function getArea(figure, a = 0, b = 0, c = 0) {
    if(figure === 'circle') {
        if(arguments.length === 2) {
           return getCircleArea(arguments[1]);
        } else {
            return getIncreaseCricleArea(arguments[1], arguments[2]);
        }
    }
    if(figure === 'rect') return getRectArea(a, b);
    if(figure === 'trapezoid') return getTrapezoidArea(a, b, c);
} 

function getCircleArea(radius) {
    const cricleArea = radius*radius*Math.PI;
    excutionSequence.push('circle', cricleArea);
    return cricleArea;
}

function getRectArea(width, height) {
    const rectArea = width * height;
    excutionSequence.push('rect', rectArea);
    return rectArea;
}

function getTrapezoidArea(topside, downside, height){
    const trapezoidArea = (topside+downside)*height/2;
    excutionSequence.push('trapezoid', trapezoidArea);
    return trapezoidArea;
}

function getIncreaseCricleArea(firstNumber, total) {
    const increaseNumber = firstNumber;
    let sum = 0;
    let tmp = firstNumber;
    while(tmp !== total) {
        sum += getArea('circle', tmp);
        tmp += increaseNumber;
    }
    excutionSequence.push('increaseCircle', sum);
    return sum;
}

let excutionSequence = [];

function printExecutionSequence() {
    console.log(excutionSequence);
    excutionSequence.length = 0;
}

console.log(getArea('circle', 10));
console.log(getArea('rect', 10, 15));
console.log(getArea('trapezoid', 10, 15, 12));
console.log(getArea('circle', 1, 5));
printExecutionSequence();

getArea('circle',2) 
getArea('rect',2,3) 
printExecutionSequence();
