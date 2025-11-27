const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.project-card');
let angle = 0;

function rotateCarousel() {
  angle -= 120; // 360 / number of cards (3 cards)
  carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
}

// Rotate every 3 seconds
setInterval(rotateCarousel, 3000);
