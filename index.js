const animals = ['lion', 'tiger', 'bears']
for (let i = 0; i <animals.length; i++){
    console.log(i,animals[i]);
    
}

const examScores = [98,77,84,91,57,66]
for ( i = 0; i < examScores.length; i++){
    console.log(i,examScores[i]);
    
}

const reverseExamScores = [98,77,84,91,57,66]
    for (let i = reverseExamScores.length -1; i >=0; i--){console.log(i, reverseExamScores[i]);
    }
    
let total = 0
const totalExamScores = [98,77,84,91,57,66]
for ( let i = 0; i < totalExamScores.length; i++) {
 total += totalExamScores[i];
}
 console.log(total);
 

let total1 = 0
const averageScore = [98,77,84,91,57,66]
for ( let i = 0; i < averageScore.length; i ++){
    total + averageScore[i]
}
console.log(total / averageScore.length);

const students = [
    {
        firstname: 'Zeus',
        grade: 86
    },
    {
        firstname: 'Artemis',
        grade: 97
    },
    {
        firstname: 'Hera',
        grade: 73
    },
    {
        firstname: 'Apollo',
        grade: 90
    },
]
for ( let i = 0; i < students.length; i++){
    let student = students[i]
    console.log(`${student.firstname} scored ${student.grade}`);
    
}

const word = 'Javascript'
let reverseWord = ''
for ( let i = word.length -1; i >= 0; i-- ){
reverseWord += word[i]
    
}
console.log(reverseWord);
