## 05 — DOM Manipulation

Title: "JavaScript DOM: Click a Button, Change the Page (Live)"

Hook (0–30s):

- "Your page is static. Let's make it react to clicks—live!"

Core concept (30s–2:00):

- Analogy: The DOM is a map of the page. JavaScript can find things on the map and change them.
- Key APIs: `querySelector`, `textContent`, `style`, `addEventListener`.

Live demo (2:00–4:30):

- Files: `src/05-dom.html` and `src/05-dom.js` (open `src/05-dom.html` in browser).

Common hangups (4:30–5:30):

- Script before HTML elements exist → `document.querySelector` returns `null`.
- Use `DOMContentLoaded` or put script at the end of `<body>`.
- CSS properties in JS use camelCase: `backgroundColor` not `background-color`.
- Avoid `innerHTML` with untrusted content (XSS risk).

Mini-challenge (5:30–6:15):

- Pause: Add a reset button that sets count to 0 and text to "Waiting...".

SOLUTION (6:15–6:30):

- See `src/05-dom.js` for the complete solution; `src/05-dom.html` contains the markup.

Extra tips & best practices:

- Cache DOM queries when used often: `const out = document.querySelector('#out')`.
- Keep event handlers small and call functions for heavy logic.

Files: `src/05-dom.html`, `src/05-dom.js`.
