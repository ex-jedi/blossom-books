// *=========================================
// ** Imports  **
// *=========================================

// TODO: Remove GSAP once everything is in lib.js
// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ********** Utils **********
import { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler } from './utils.js';

import { mainNavTrigger, menuOpenerHandler, contactFormScrollColourChange, fadeInRotateParagraphs } from './lib.js';

// ********** GSAP **********
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// *=========================================
// ** GSAP  **
// *=========================================

contactFormScrollColourChange();

// *=========================================
// ** Header Image Switcher  **
// *=========================================

const aboutMeHeaderImage = document.querySelectorAll('.about-me-header-image');
function headerImageChange() {
  aboutMeHeaderImage.forEach((image) => {
    // console.log(image);
    if (image.classList.contains('about-me-header-image-showing')) {
      image.classList.remove('about-me-header-image-showing');
    } else {
      image.classList.add('about-me-header-image-showing');
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
// ** Section Colour Change  **
// *=========================================

ScrollTrigger.create({
  trigger: '.about-me-section',
  start: 'top center',
  end: 'bottom center',
  id: 'About me section',
  toggleClass: { targets: '.about-me-section, .arrow-wrapper', className: 'active' },
});

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

// ********** Hide text area label on scroll **********
if (textAreaInput) textAreaInput.addEventListener('scroll', textAreaScrollHandler);

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Fade in paragraphs **********
fadeInRotateParagraphs();
