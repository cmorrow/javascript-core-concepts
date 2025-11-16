## 02 — Control Flow: Conditionals & Loops

Title: "JavaScript Control Flow: If/Else, For, While (No More Infinite Loops)"

Hook (0–30s):

- "Want your code to choose? Or repeat 10 times without copy-paste? Let's go."

Core concept (30s–2:00):

- Analogy: Conditionals are crossroads where the program picks a path. Loops are ovens that repeat a recipe until it's done.
- Key pieces:
  - `if / else if / else` — pick different actions.
  - `switch` — many choices (optional).
  - `for`, `while`, `do...while` — repeat until a condition is met.

Live demo (2:00–4:30):

```js
// src/02-control-flow.js
let score = 85;
let grade = score > 90 ? "A+" : score > 80 ? "B" : "Keep trying";

let evens = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) evens.push(i);
}

console.log("grade:", grade); // B
console.log("evens:", evens); // [2,4,6,8,10]

// while example
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--; // avoid infinite loop
}
```

Common hangups (4:30–5:30):

- Off-by-one errors: know whether to use `<` or `<=` depending on whether you need the last number.
- Infinite loops: always ensure the loop progress (like `i++`) is present.
- Truthy/falsy confusion: empty string `''` is falsy; a non-empty string is truthy.

Mini-challenge (5:30–6:15):

- Pause: Loop 1–10 and log only even numbers using `continue`.

SOLUTION (6:15–6:30):

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
// Output: 2,4,6,8,10
```

Extra tips & best practices:

- Decide loop style by intent: use `for` when you know iterations; `while` for uncertain counts.
- Keep loop bodies short and readable.
- Use `===` and `!==` for strict comparisons.

Files: `src/02-control-flow.js` (runnable with `node`).
