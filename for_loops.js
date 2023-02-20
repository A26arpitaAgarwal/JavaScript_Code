//for loop priniting numbers from 0 to 4 
for (let i = 0; i < 5; i++) {
  console.log(`The value of i is ${i}.`);
}

/*output
The value of i is 0.
The value of i is 1.
The value of i is 2.
The value of i is 3.
The value of i is 4.*/


//for-in loop
const person = {name: "John", age: 30, occupation: "Engineer"};

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

/*output
name: John
age: 30
occupation: Engineer*/


//for-of loop
const fruits = ["apple", "banana", "cherry", "date"];

for (let fruit of fruits) {
  console.log(fruit);
}

/*output
apple
banana
cherry
date
