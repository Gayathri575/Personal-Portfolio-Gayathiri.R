const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // include margin
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < slides.length - 1) index++;
  else index = 0;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  else index = slides.length - 1;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
