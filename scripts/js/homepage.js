// *=========================================
// ** Imports  **
// *=========================================

// TODO: Put all greensock into modules
// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

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

// *==============================================================================
// ** Imported  **
// *==============================================================================

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********

mainNavTrigger.addEventListener('click', menuOpenerHandler);

// *=========================================
// ** Utils  **
// *=========================================

// ********** Cookie Warning **********

cookieWarning();

// ********** Tab Outline **********

window.addEventListener('keydown', handleFirstTab);
