// src/04-objects-arrays.js
// Run with: node src/04-objects-arrays.js

const song = { title: "Song 1", artist: "A", duration: 180 };
const playlist = [song];

playlist.push({ title: "Song 2", artist: "B", duration: 220 });

let total = playlist.reduce((sum, s) => sum + s.duration, 0);
console.log("playlist:", playlist);
console.log("total seconds:", total);
console.log("total minutes:", (total / 60).toFixed(1));

const titles = playlist.map((s) => s.title);
console.log("titles:", titles);

// Mini-challenge solution
const myPlaylist = [
  { title: "Song A", duration: 210 },
  { title: "Song B", duration: 180 },
  { title: "Song C", duration: 240 },
];
const totalSeconds = myPlaylist.reduce((sum, s) => sum + s.duration, 0);
console.log("My playlist total minutes:", (totalSeconds / 60).toFixed(1));
