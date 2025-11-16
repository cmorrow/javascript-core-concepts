// src/06-async.js
// Open src/06-async.html in a browser to try.

document.querySelector("#fetch").addEventListener("click", async () => {
  const el = document.querySelector("#joke");
  el.textContent = "Loading...";
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();
    el.textContent = `${data.setup} ... ${data.punchline} 😂`;
  } catch (err) {
    console.error(err);
    el.textContent = "Failed to load joke 😢";
  }
});

// Dog image mini-challenge
document.querySelector("#dogFetch").addEventListener("click", async () => {
  const img = document.querySelector("#dog");
  img.src = "";
  img.alt = "Loading...";
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();
    img.src = data.message;
    img.alt = "Random Dog";
  } catch (err) {
    console.error(err);
    img.alt = "Failed to load dog 😢";
  }
});
