// *=========================================
// ** Imports  **
// *=========================================

// TODO: Put all greensock into modules

// ********** Utils **********
import { cookieWarning, handleFirstTab } from './utils.js';

// ********** Lib **********
import {
  menuOpenerHandler,
  mainNavTrigger,
  headerPlantAnimation,
  scrollChangeColourOne,
  scrollChangeColourTwo,
  steamingCup,
} from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

scrollChangeColourOne();

scrollChangeColourTwo();

steamingCup();

headerPlantAnimation();

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
