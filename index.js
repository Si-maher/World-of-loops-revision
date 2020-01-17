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


// Nested loops 

for (let i = 0; i <= 5; i ++){
    console.log("Outer Loop:", i);
    for ( let j = 5; j >=0; j -- ){
        console.log("       Inner Loop:", j);
    }
}
        
  const gameBoard = [
      [4,32,8,4],
      [64,8,32,2],
      [8,32,16,4],
      [2,8,4,2],
  ]  
  let totalScore = 0
  for (let i = 0; i < gameBoard.length; i ++) {
      let row = gameBoard[i]
      for ( let j = 0; j < row.length; j ++)
      totalScore += row[j]
      console.log(totalScore);
      
  }

//   While loop 

let j = 0
while(j <=5){
    console.log(j);
    j++

    
}

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10) 
while (guess !== target) {
    
    console.log(`Target: ${target} Guess:${guess}`);
    guess = Math.floor(Math.random() * 10)
    
}
console.log(`Target: ${target} Guess:${guess}`);
console.log("Congrats, you win!");

// Of loop

let subreddits = ["soccer", "popheads", "cringe", "books"]
for ( let sub of subreddits){
    console.log(sub);
    
}

for ( let char of "javascript"){
    console.log(char.toUpperCase());
    
}

// ######################################################

const magicSquare = [[2,7,6], [9,5,1], [4,3,8]]

for ( let i = 0; i < magicSquare.length; i ++){
    let row = magicSquare[i]
    let sum  = 0
    for (let j = 0; j < row.length; j ++){
        sum += row[j]
    }
    
    console.log(`${row} summed to ${sum}`);
}

// for of 

for (let row of magicSquare){
    let sum = 0
    for (let num of row) {
        sum += num
    }
    console.log(`${row} summed to ${sum}`);
}


// ######################################################

const words1 = ['mail','milk','bath','black']
const words2 = ['box', 'shake', 'tub', 'berry']

for (let i = 0; i < words1.length; i ++) {
    console.log(`${words1[i]}${words2[i]}`);
    
}

const movieReviews = {
 Arrivals   :  9.5  ,
 Alien  :   9 ,
 Amelie :  8  ,
'In Bruge'  : 9   ,
 Amadeus  :  10  ,
'Kill Bill' : 8    ,
'Little Miss Sunshine' : 8.5    ,
Caroline : 7.7   
}

for (let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
    
}

const ratings = Object.values(movieReviews)
let total3 = 0
for (r of ratings){
    total3 += r
}
let avg = total3 / ratings.length
console.log(avg);


// for in  

// For in will iterate over the keys, the properties in an object 

const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 30000,
    tournamount : 500000,
    battleOfDecades : 100000
}

for ( let prop in jeopardyWinnings) {
    
    console.log(prop, jeopardyWinnings[prop]);
}
    
let total4 = 0
for (let prop in jeopardyWinnings){
    total4 += jeopardyWinnings[prop]
}    
console.log(`Ken Jennings total ernings: ${total4}`);
