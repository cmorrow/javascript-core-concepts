## 01 — Variables & Data Types

Title: "JavaScript Variables: Why `1 + '1' = '11'` (and How to Fix It)"

Hook (0–30s):

- "You type `1 + '1'` and expect `2`. JS says `'11'`. Let’s fix the confusion now."

Core concept (30s–2:00):

- Analogy: Variables are labeled boxes where you store things. Data types are what kind of thing is inside the box (a number, text, true/false, or empty).
- Quick rules:
  - `let` — a box you can change.
  - `const` — a box you promise not to replace (you can still change the contents of an object inside it).
  - `var` — old style (works differently; avoid for beginners).
- Primitives: `string`, `number`, `boolean`, `null`, `undefined`.

Live demo (2:00–4:00):

```js
// src/01-variables.js
// Basic variables and type coercion
let name = "Alex"; // string
const age = 25; // number
var isLearning = true; // boolean (old style var shown intentionally)
let score = 90;

console.log(`${name} is ${age} → ${score + " points"}`); // coercion demo: number + string => string

// Fixing the coercion
console.log(score + Number("10")); // 100 — convert the string to a number
console.log(String(100) + " points"); // '100 points' — convert number to string

// null vs undefined
let a = null; // intentionally empty box
let b; // undefined — box not even created
console.log(a, b);
```

Common hangups (4:00–5:30):

- Hoisting: variables declared with `var` behave differently. `console.log(x); var x = 5;` prints `undefined` because declaration is moved up.
- Type coercion: operations can change types automatically (`"5" + 2` → `'52'`). Prefer explicit conversions (Number(), String()).
- Reassigning `const` throws an error. But `const arr = []` allows `arr.push(1)` (the reference is constant, not the contents).

Mini-challenge (5:30–6:15):

- Create a `user` with `name` (string), `age` (number), `isLoggedIn` (boolean). Log: `"[name] is [age] and logged in: [bool]"`.

SOLUTION (6:15–6:30):

```js
// Solution example
const user = {
  name: "Jordan",
  age: 28,
  isLoggedIn: true,
};
console.log(`${user.name} is ${user.age} and logged in: ${user.isLoggedIn}`);
// Output: Jordan is 28 and logged in: true
```

Extra tips & best practices:

- Prefer `const` by default; use `let` when you know you'll change it.
- Avoid `var` — it leads to confusing hoisting behavior.
- Be explicit about conversions: `Number('3')`, `String(4)`, `Boolean(something)`.

Files: `src/01-variables.js` (example runnable with `node src/01-variables.js`).
