const carouselImages = document.querySelector('.carousel-images'); // Selects the container holding carousel slides and assigns it to carousel imahes
const slides = document.querySelectorAll('.carousel-images li');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let index = 0; // index 

function updateCarousel() 
{
  const width = slides[0].clientWidth;
  carouselImages.style.transform = `translateX(${-index * width}px)`;
}

function showPrev() 
{
  index = (index - 1 + slides.length) % slides.length; 
  updateCarousel();
}

function showNext() 
{
  index = (index + 1) % slides.length; 
  updateCarousel();
}

prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

setInterval(() => {showNext();}, 5000); // Change slide every 5 seconds
