// src/01-variables.js
// Run with: node src/01-variables.js

let name = "Alex"; // string
const age = 25; // number
var isLearning = true; // boolean (old style var shown intentionally)
let score = 90;

console.log(`${name} is ${age} → ${score + " points"}`); // coercion demo

// Fixing the coercion
console.log('score + Number("10") =>', score + Number("10")); // 100
console.log('String(100) + " points" =>', String(100) + " points"); // '100 points'

// null vs undefined
let a = null;
let b;
console.log("null vs undefined:", a, b);

// Mini-challenge answer
const user = { name: "Jordan", age: 28, isLoggedIn: true };
console.log(`${user.name} is ${user.age} and logged in: ${user.isLoggedIn}`);
