// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler } from './utils.js';

// ********** Lib **********
import {
  mainNavTrigger,
  menuOpenerHandler,
  contactFormScrollColourChange,
  fadeInRotateParagraphs,
  servicesScrollColourChange,
  aboutMeSectionColourChange,
} from './lib.js';

// *==============================================================================
// ** Imported  **
// *==============================================================================

// *=========================================
// ** Utils  **
// *=========================================
// ********** Txt area scroll **********
if (textAreaInput) textAreaInput.addEventListener('scroll', textAreaScrollHandler);

// ********** Cookie warning **********
cookieWarning();

// ********** Tab Outline **********
window.addEventListener('keydown', handleFirstTab);

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Contact form colour change **********
contactFormScrollColourChange();

// ********** Paragraph fade in **********
fadeInRotateParagraphs();

// ********** Services scroll colour change **********
servicesScrollColourChange();

// ********** About Me Section Colour Change **********
aboutMeSectionColourChange();
