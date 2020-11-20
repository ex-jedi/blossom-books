// TODO: Module all the things so each page just has one js file

// *=========================================
// ** GSAP  **
// *=========================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

ScrollTrigger.defaults({
  // markers: true,
});

// // * Contact form color change
// ScrollTrigger.create({
//   trigger: '.general-contact-form-section',
//   start: 'top center',
//   end: 'bottom center',
//   id: 'Contact Form',
//   toggleClass: {
//     targets: '.general-contact-form-section, .general-contact-form-input, .main-contact-submit-button',
//     className: 'active',
//   },
// });

// ********** Fading in paragraphs **********

// * Adding class to paragraphs created by Perch to set them up for fading in.
// Grabbing paragraphs from multiple pages
const aboutMeParagraphs = Array.from(document.querySelectorAll('.about-me-section p'));
const servicesParagraphs = Array.from(document.querySelectorAll('.services-section p'));
// Merge the paragraphs into one array
const fadeInParagraph = [...aboutMeParagraphs, ...servicesParagraphs];
// Add class to paragraphs
fadeInParagraph.forEach((paragraph) => paragraph.classList.add('fade-in-rotate'));

// Grabbing all paragraphs to fade in
const fadeInParagraphs = gsap.utils.toArray('.fade-in-rotate');

fadeInParagraphs.forEach((paragraph) => {
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 1100px)': function () {
      ScrollTrigger.create({
        trigger: paragraph,
        toggleClass: 'fade-in-rotate-reveal',
        start: 'top 95%',
        end: 'bottom top',
      });
    },

    // Tablet
    '(max-width: 1099px) and (min-width: 700px)': function () {
      ScrollTrigger.create({
        trigger: paragraph,
        toggleClass: 'fade-in-rotate-reveal',
        start: 'top bottom',
        end: 'bottom -100px',
      });
    },

    // Mobile
    '(max-width: 699px) and (min-width: 450px)': function () {
      ScrollTrigger.create({
        trigger: paragraph,
        toggleClass: 'fade-in-rotate-reveal',
        start: 'top bottom',
        end: 'bottom -300px',
      });
    },

    // Small Mobile
    '(max-width: 449px)': function () {
      ScrollTrigger.create({
        trigger: paragraph,
        toggleClass: 'fade-in-rotate-reveal',
        start: 'top bottom',
        end: 'bottom -450px',
      });
    },
  });
});

// ? TODO: Cookie warning was here
