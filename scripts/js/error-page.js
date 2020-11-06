// *==============================================================================
// ** 404 & 403 Pages  **
// *==============================================================================

// *=========================================
// ** Picture Switcher  **
// *=========================================

const slides = Array.from(document.querySelectorAll('.error-page-main-image'));

let currentSlide = 0;
function infiniteNextSlide() {
  slides[currentSlide].classList.remove('error-page-image-showing');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('error-page-image-showing');
}

function errorPageSlideshow() {
  setInterval(infiniteNextSlide, 1000);
}

errorPageSlideshow();
