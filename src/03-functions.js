// src/03-functions.js
// Run with: node src/03-functions.js

function calcTip(bill, pct) {
  return (bill * pct) / 100;
}

const double = (x) => x * 2;

let tip = calcTip(50, 15);
console.log("Tip:", tip.toFixed(2));
console.log("Double 7 ->", double(7));

// Scope demo
function greet(name) {
  let greeting = `Hello, ${name}`;
  return greeting;
}
console.log(greet("Sam"));

// Mini-challenge solution
function greet2(name, timeOfDay) {
  return `Good ${timeOfDay.toLowerCase()}, ${name}!`;
}
console.log(greet2("Alex", "Morning"));
