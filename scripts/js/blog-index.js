// *==============================================================================
// ** Blog Index JS  **
// *==============================================================================

// *=========================================
// ** GSAP  **
// *=========================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// ********** Cat subtitle show and hide **********

const catTitle = document.querySelector('.blog-index-page-subtitle');
const catList = document.querySelector('.blog-categories-ul');
const indexWrapper = document.querySelector('.blog-index-wrapper');

function categoryClickHandler() {
  catTitle.classList.toggle('blog-index-page-subtitle-reveal');
  catList.classList.toggle('blog-categories-ul-reveal');
  indexWrapper.classList.toggle('category-push-down');
}

catTitle.addEventListener('click', categoryClickHandler);

// ********** Fading in article titles **********

// Grabbing blog index titles
const fadeInParagraphs = gsap.utils.toArray('.blog-index-title');

fadeInParagraphs.forEach((title) => {
  ScrollTrigger.create({
    trigger: title,
    toggleClass: 'title-reveal',
    start: 'top 98%',
    end: 'bottom top',
  });
});
