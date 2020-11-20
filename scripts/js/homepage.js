// *=========================================
// ** Imports  **
// *=========================================

// TODO: Put all greensock into modules

// ********** Utils **********
import { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler } from './utils.js';

// ********** Lib **********
import {
  menuOpenerHandler,
  mainNavTrigger,
  headerPlantAnimation,
  scrollChangeColourOne,
  scrollChangeColourTwo,
  steamingCup,
  contactFormScrollColourChange,
} from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

scrollChangeColourOne();

scrollChangeColourTwo();

steamingCup();

headerPlantAnimation();

contactFormScrollColourChange();

// *=========================================
// ** Header Image Switcher  **
// *=========================================

const headerImage = document.querySelectorAll('.header-main-image');
function headerImageChange() {
  headerImage.forEach((image) => {
    // console.log(image);
    if (image.classList.contains('header-main-image-showing')) {
      image.classList.remove('header-main-image-showing');
    } else {
      image.classList.add('header-main-image-showing');
    }
  });
}

(function loop(min = 1000, max = 6000, randomNumber = Math.random()) {
  const rand = Math.floor(randomNumber * (max - min) + min);
  setTimeout(() => {
    headerImageChange();
    loop();
  }, rand);
})();

// *=========================================
// ** Main Nav  **
// *=========================================

mainNavTrigger.addEventListener('click', menuOpenerHandler);

// *=========================================
// ** Cookie Warning  **
// *=========================================

cookieWarning();

// *=========================================
// ** Tab Outline  **
// *=========================================

window.addEventListener('keydown', handleFirstTab);

// *=========================================
// ** Hide text area label on scroll  **
// *=========================================
if (textAreaInput) textAreaInput.addEventListener('scroll', textAreaScrollHandler);
