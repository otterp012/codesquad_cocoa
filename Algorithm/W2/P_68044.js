function solution(numbers) {
    let tmp = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j< numbers.length; j++) {
            if(i!==j) {
                tmp.push(numbers[i] + numbers[j]);
            }
        }
    }
    let answer = new Set(tmp);
    return [...answer].sort((a,b) => (a-b));
}