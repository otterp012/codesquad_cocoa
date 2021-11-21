

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const grades = []

class SubjectGradeManager {
    inputSubject(subject) {
        return new Promise((resolve, reject) => {
            rl.question(`과목명을 입력해주세요. \n그만하시려면 "그만"을 입력해주세요.`, (subject) => {
                if( subject !== "그만") {
                    resolve(subject);
                } else {
                    console.log(grades);
                }
            })
        })
    }
}
const data = [];

function question() {
   return new Promise((resolve, reject) => {
    rl.question(`과목명을 입력하시고, .\n그만하시려면 "그만"을 입력해주세요.\n ex)수학 100 `, (subjectinput) => {
        if(subjectinput === "그만") {
            reject(data)
        } else {
            resolve(subjectinput);
        }
    })
}) 
}

// const questionGrades = new Promise((resolve, reject) => {
//     rl.question(`점수를 입력해주세요.`, (subjectinput) => {
//         resolve(subjectinput);
//     })
// })
function questionGrades() {
    rl.question(`점수를 입력해주세요.`, (subjectinput) => {
        data.push(subjectinput);
    })
    return question()
          .then((value) => {
               data.push(value)
              return questionGrades();
           })
             .catch((value) => console.log(value))
}

question()
    .then((value) => {
        data.push(value)
        return questionGrades();
    })
    .catch((value) => console.log(value))

// const answer = new Promise((resolve, reject) => {
//     rl.on("line", (gradeinput) => {
//         resolve(gradeinput);
//     });
// }) 

// const suspend = new Promise((resolve, reject) => {

// })
