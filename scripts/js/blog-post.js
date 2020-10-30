// *==============================================================================
// ** Blog Post JS  **
// *==============================================================================
// *=========================================
// ** GSAP  **
// *=========================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// ********** Blog post paragrapg fade in **********
const blogPostParagraphs = document.querySelectorAll('.blog-text-block p');

blogPostParagraphs.forEach((title) => {
  ScrollTrigger.create({
    trigger: title,
    toggleClass: 'paragraph-reveal',
    start: 'top 90%',
    end: 'bottom 10%',
    markers: true,
  });
});
