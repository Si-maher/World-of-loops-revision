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

