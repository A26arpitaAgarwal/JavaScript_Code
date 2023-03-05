console.log("!!!! WELCOME TO THE GAME !!!!")
console.log(`S for snake\nW for gun\nG for gun`);
let user = prompt("Enter Capital S, W or G");

let cpuI = Math.floor(Math.random() * 3);

let cpu = ["S", "W", "G"][cpuI]
const match = (cpu, user) => {
  if (cpu === user) {
    return "This match is Tie"
  }
  else if (cpu === "S" && user === "W") {
    return "cpu"
  }
  else if (cpu === "G" && user === "S") {
    return "Cpu"
  }
  else if (cpu === "W" && user === "G") {
    return "Cpu"
  }
  else if (cpu === "W" && user === "S") {
    return "User"
  }
  else if (cpu === "G" && user === "W") {
    return "User"
  }
  else if (cpu === "S" && user === "G") {
    return "User"
  }
}
let result = match(cpu, user);

console.log("CPU  ", cpu);
console.log("User  ", user);
console.log("The Winner is: ", result);
