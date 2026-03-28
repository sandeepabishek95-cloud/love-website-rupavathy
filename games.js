// Simple memory guessing game
const memories = ["Beach Trip", "First Date", "Birthday Surprise"];
function guessMemory() {
  const random = memories[Math.floor(Math.random() * memories.length)];
  document.getElementById('game-result').innerText = `Do you remember this? ❤️ ${random}`;
}
