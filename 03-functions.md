## 03 — Functions & Scope

Title: "JavaScript Functions: Stop Copy-Pasting Code Forever"

Hook (0–30s):

- "Tired of writing the same 5 lines 10 times? Functions are your DRY superpower."

Core concept (30s–2:00):

- Analogy: Functions are recipes. You give ingredients (arguments) and get a dish (return value).
- Scope: local ingredients inside a function are hidden from the outside.
- Types:
  - Function declaration: `function f() {}`
  - Function expression: `const f = function() {}`
  - Arrow function: `const f = () => {}` (shorter)

Live demo (2:00–4:30):

```js
// src/03-functions.js
function calcTip(bill, pct) {
  return (bill * pct) / 100;
}

const double = (x) => x * 2;

let tip = calcTip(50, 15);
console.log("Tip:", tip.toFixed(2));
console.log("Double 7 ->", double(7));

// Scope demo
function greet(name) {
  let greeting = `Hello, ${name}`; // greeting is local
  return greeting;
}
console.log(greet("Sam"));
// console.log(greeting); // would throw: greeting not defined
```

Common hangups (4:30–5:30):

- Forgetting `return` returns `undefined`.
- `var` inside loops and functions has different scope than `let`/`const`.
- Arrow functions do not have their own `this` (advanced topic — mention only).

Mini-challenge (5:30–6:15):

- Pause: Write `greet(name, timeOfDay)` → returns `"Good morning, Alex!"` (timeOfDay should be a simple string like 'Morning').

SOLUTION (6:15–6:30):

```js
function greet(name, timeOfDay) {
  return `Good ${timeOfDay.toLowerCase()}, ${name}!`;
}

console.log(greet("Alex", "Morning"));
// Output: Good morning, Alex!
```

Extra tips & best practices:

- Make functions do one thing.
- Prefer small functions that return values instead of changing global state.
- Name functions clearly: `calculateTotal`, `renderCard`, `isValidEmail`.

Files: `src/03-functions.js`.
