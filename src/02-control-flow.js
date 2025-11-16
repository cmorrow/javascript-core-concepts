// src/02-control-flow.js
// Run with: node src/02-control-flow.js

let score = 85;
let grade = score > 90 ? "A+" : score > 80 ? "B" : "Keep trying";

let evens = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) evens.push(i);
}

console.log("grade:", grade);
console.log("evens:", evens);

// while example (avoid infinite loop)
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// Mini-challenge solution: log even numbers using continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log("even via continue:", i);
}
