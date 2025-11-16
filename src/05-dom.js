// src/05-dom.js
// Open src/05-dom.html in a browser to try.

let count = 0;

const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
const out = document.querySelector("#out");

btn.addEventListener("click", () => {
  count++;
  out.textContent = `Clicked ${count} time${count > 1 ? "s" : ""}!`;
  out.style.color = count % 2 ? "blue" : "red";
});

reset.addEventListener("click", () => {
  count = 0;
  out.textContent = "Waiting...";
  out.style.color = "black";
});
