//Number Guessing Game

console.log("!!Welcome to the number guessing game!!\n")

//Implementing variables
let max = 100;
let min = 0
let randomNum = Math.floor(Math.random() * (max - min)) + min;
let count = 0;
let limit = 100

//Implementing logic
while (count <= limit) {
  let gusNum = prompt("Enter a number: ");
  let gussNumber = Number.parseInt(gusNum)
  if (gussNumber === randomNum) {
    console.log("\nYeahh!!!,\nCongratulations you have entered a currect number")
    count++;

    return;
  }
  else if (gussNumber < randomNum) {
    console.log("Number is less then the Actual number")
    count++;

  }
  else if (gussNumber > randomNum) {
    console.log("Number is greater then the Actual number")
    count++;

  }
}
console.log("Limit to enter number is finished")
console.log("Actual Number is = " + randomNum)
