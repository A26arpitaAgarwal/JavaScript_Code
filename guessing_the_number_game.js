//Number Guessing Game

//Introducing variables
let random_num = Math.round(Math.random() * 100);
let guessed_num;
let guess = 0;
let score;

//Implementing Logics
do {
  guessed_num = prompt(`Enter Your Guessed Number (0-100): `);
  guessed_num = Number.parseInt(guessed_num);
  guess++;
  if (guessed_num > random_num) {
    console.log(`The Number You Have Guessed Is Wrong.`); 
    console.log(`\nThe guessed num is greater than target num`);
    console.log(`Try Again: `);
  }
  else if (guessed_num < random_num) {
    console.log(`The Number You Have Guessed Is Wrong.`); 
    console.log(`\nThe guessed num is less than target num`);
    console.log(`Try Again: `);
  }
  else {
    console.log(`Good Job!`);
  }
} while (guessed_num != random_num);
console.log(`\nThe Right Number Was ${random_num}`);
console.log(`\nYou Needed ${guess} Guesses To Get The Right Number`);
score = 100-guess+1;
console.log(`You Scored: ${score}`);
if(100<=score && score<=50){
  console.log(`\nGreat Work, Keep Up The Good Luck!`);
}
else{
  console.log(`\nBetter Luck Next Time!`);
}
