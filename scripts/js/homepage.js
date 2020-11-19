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
import { menuOpenerHandler, mainNavTrigger, headerPlantAnimation, scrollChangeColour } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

scrollChangeColour();

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

headerPlantAnimation();

// ********** Mug Animation **********

function steamingCup() {
  const mugSteam = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
  });

  mugSteam
    .fromTo('.st1', { drawSVG: 0 }, { drawSVG: '25% 100%', duration: 2, ease: 'power1.in' })
    .to('.st1', { drawSVG: '100% 100%', duration: 2, ease: 'power1.out' });
}

steamingCup();

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
