## 04 — Objects & Arrays

Title: "JavaScript Objects & Arrays: Store Real-World Data Like a Pro"

Hook (0–30s):

- "Variables hold one thing. Objects hold everything. Arrays hold lists. Let's organize data like a pro."

Core concept (30s–2:00):

- Analogy: Objects are labeled drawers (keys), arrays are numbered lists (index 0,1,2).
- Key methods: `push`, `pop`, `map`, `filter`, `reduce`.

Live demo (2:00–4:30):

```js
// src/04-objects-arrays.js
const song = { title: "Song 1", artist: "A", duration: 180 };
const playlist = [song];

playlist.push({ title: "Song 2", artist: "B", duration: 220 });

let total = playlist.reduce((sum, s) => sum + s.duration, 0);
console.log("playlist:", playlist);
console.log("total seconds:", total);
console.log("total minutes:", (total / 60).toFixed(1));

// map example: titles
const titles = playlist.map((s) => s.title);
console.log("titles:", titles);
```

Common hangups (4:30–5:30):

- Reference vs value: setting `let b = a` copies the reference for objects/arrays — mutating `b` can change `a`.
- `forEach` doesn't return a value; `map` returns a new array.
- Mutating `const` arrays is allowed (you can't reassign the variable name).

Mini-challenge (5:30–6:15):

- Pause: Build a `playlist` with 3 songs. Log total duration in minutes.

SOLUTION (6:15–6:30):

```js
const playlist = [
  { title: "Song A", duration: 210 },
  { title: "Song B", duration: 180 },
  { title: "Song C", duration: 240 },
];
const totalSeconds = playlist.reduce((sum, s) => sum + s.duration, 0);
const totalMinutes = (totalSeconds / 60).toFixed(1);
console.log(`Total: ${totalMinutes} minutes`);
// Output: Total: 10.5 minutes
```

Extra tips & best practices:

- Prefer `map`, `filter`, `reduce` for clean and declarative transformations.
- When you need a copy, shallow-copy with `[...]` for arrays or `{...}` for objects. For deep copies, use structuredClone or JSON methods (with caveats).

Files: `src/04-objects-arrays.js`.
