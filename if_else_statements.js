//telling the user that they are eligible for vote or not
let age = prompt("enter you age");
age = Number.parseInt(age);

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}
