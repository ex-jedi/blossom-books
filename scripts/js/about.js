// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler, mainLogoLink } from './utils.js';

import {
  mainNavTrigger,
  menuOpenerHandler,
  contactFormScrollColourChange,
  fadeInRotateParagraphs,
  aboutMeSectionColourChange,
} from './lib.js';

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

// ********** Add domain to logo template for Schema markup  **********

mainLogoLink();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Fade in paragraphs **********
fadeInRotateParagraphs();

// ********** Section Colour Change **********
aboutMeSectionColourChange();
