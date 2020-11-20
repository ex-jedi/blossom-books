// *=========================================
// ** Imports  **
// *=========================================
// TODO: Remove GSAP
// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ********** Utils **********
import { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler } from './utils.js';

// ********** Lib **********
import { mainNavTrigger, menuOpenerHandler, contactFormScrollColourChange, fadeInRotateParagraphs } from './lib.js';

// ********** GSAP **********
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// * Adding class to paragraphs created by Perch to set them up for fading in.
const fadeInParagraph = document.querySelectorAll('.services-section p');
fadeInParagraph.forEach((paragraph) => paragraph.classList.add('fade-in-rotate'));

// *=========================================
// ** Section Colour Change  **
// *=========================================

ScrollTrigger.create({
  trigger: '.services-section',
  start: 'top center',
  end: 'bottom center',
  id: 'About me section',
  toggleClass: { targets: '.services-section, .arrow-wrapper', className: 'active' },
});

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
