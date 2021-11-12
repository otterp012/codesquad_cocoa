// solve-me-first

function solveMeFirst(a, b) {
    // Hint: Type return a+b below   
    return a+b;
  }



// Grading Students

  function gradingStudents(grades) {
    let tmp = [];

for(let i = 0; i< grades.length; i++) {
    tmp.push(grades[i]);
        while(tmp[i]%5 !==0) {
            tmp[i]++;
        }
    if(tmp[i]>=40) {
        if(3 > tmp[i] - grades[i]) {
            grades[i] = tmp[i];
        }
    }
    }

    return grades;

}

// compareTriplets
function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;
    for(let i = 0; i<a.length; i++){
        if(a[i] > b[i]) alice++;
        if(a[i] < b[i]) bob++;
    }
    return [alice, bob];
}

let a = [5, 6, 7];
let b = [3, 6, 10];

console.log(compareTriplets(a,b));

// A bery Big Sum
function aVeryBigSum(ar) {
   let sum = 0;
   for(let x of ar){
       sum += x;
   }
   return sum;
}


// Number Line Jumps
