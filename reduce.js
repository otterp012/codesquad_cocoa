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