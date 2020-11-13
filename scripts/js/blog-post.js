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

// ********** Blog post paragraph fade in **********
const blogPostParagraphs = document.querySelectorAll('.blog-text-block p');

blogPostParagraphs.forEach((paragraph) => {
  ScrollTrigger.create({
    trigger: paragraph,
    toggleClass: 'paragraph-reveal',
    start: 'top 100%',
    end: 'bottom -400px',
    id: 'Paragraphs',
  });
});

// ********** Blog main image resize on scroll **********
const blogPostImage = document.querySelectorAll('.blog-post-image');

// blogPostImage.forEach((image) => {
//   gsap.to(image, {
//     scrollTrigger: {
//       trigger: image,
//       start: 'top 85%',
//       end: 'bottom 85%',
//       scrub: 1,
//       toggleActions: 'resume',
//       markers: true,
//     },
//     scale: 1.3,
//   });
// });

blogPostImage.forEach((image) => {
  ScrollTrigger.matchMedia({
    // Desktop
    '(min-width: 801px)': function () {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: 1,
          toggleActions: 'resume',
          markers: true,
        },
        scale: 1.3,
      });
    },
    // Tablet / Mobile
    '(max-width: 800px)': function () {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 1,
          toggleActions: 'resume',
          markers: true,
        },
        scale: 1.3,
      });
    },
  });
});
