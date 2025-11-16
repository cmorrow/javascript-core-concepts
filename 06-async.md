## 06 — Asynchronous JavaScript (Promises & async/await)

Title: "JavaScript Async: Fetch Data Without Freezing Your App"

Hook (0–30s):

- "Click → 3-second freeze. Let's fix that forever."

Core concept (30s–2:00):

- Analogy: Async is like ordering food — you can do other things while you wait. Promises are the order slip.
- Progression: callbacks → promises → `async/await`.
- Useful APIs: `fetch`, `await`, `response.json()`.

Live demo (2:00–4:30):

- Files: `src/06-async.html` and `src/06-async.js` (open `src/06-async.html` in browser).

Common hangups (4:30–5:30):

- Forgetting `await` means you get a Promise object, not the final value.
- Always use `try/catch` with `await` to handle network errors.
- CORS is a browser limitation — use public APIs or your own server during testing.

Mini-challenge (5:30–6:15):

- Pause: Fetch a random dog image from `https://dog.ceo/api/breeds/image/random` and show it in `<img id="dog">`.

SOLUTION (6:15–6:30):

- See `src/06-async.html` and `src/06-async.js` for the sample solution; includes try/catch and loading states.

Series close (6:30–7:00):

- "You’ve built a full interactive app! Combine all 6 → make a Todo + API Dashboard. Drop your project in comments—I’ll feature it!"

Files: `src/06-async.html`, `src/06-async.js`.
