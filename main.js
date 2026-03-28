// Floating hearts animation
const heartsContainer = document.createElement('div');
heartsContainer.className = 'hearts-animation';
document.body.appendChild(heartsContainer);

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
