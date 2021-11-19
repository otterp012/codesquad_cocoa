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

// 일단, 풀긴 풀었는데. 배열 고차함수 사용해서 푸는 방법 생각해보기.

