// *==============================================================================
// ** 404 & 403 Pages  **
// *==============================================================================

// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab, mainLogoLink } from './utils.js';

// ********** Lib **********
import { mainNavTrigger, menuOpenerHandler } from './lib.js';

// ********** Add domain to logo template for Schema markup  **********

mainLogoLink();

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

// *==============================================================================
// ** Imported  **
// *==============================================================================

// *=========================================
// ** Utils  **
// *=========================================

// ********** Cookie Warning **********
cookieWarning();

// ********** Tab Outline **********
window.addEventListener('keydown', handleFirstTab);

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);
