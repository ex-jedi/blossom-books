// TODO: Module all the things so each page just has one js file

// *=========================================
// ** GSAP  **
// *=========================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

ScrollTrigger.defaults({
  // markers: true,
});

// * Contact form color change
ScrollTrigger.create({
  trigger: '.general-contact-form-section',
  start: 'top center',
  end: 'bottom center',
  id: 'Contact Form',
  toggleClass: {
    targets: '.general-contact-form-section, .general-contact-form-input, .main-contact-submit-button',
    className: 'active',
  },
});

// ********** Fading in paragraphs **********

// * Adding class to paragraphs created by Perch to set them up for fading in.
const fadeInParagraph = document.querySelectorAll('.about-me-section p');
fadeInParagraph.forEach((paragraph) => paragraph.classList.add('fade-in-rotate'));

// * Grabbing all paragraphs to fade in
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
    '(max-width: 699px)': function () {
      ScrollTrigger.create({
        trigger: paragraph,
        toggleClass: 'fade-in-rotate-reveal',
        start: 'top bottom',
        end: 'bottom -300px',
      });
    },
  });
});

// *=========================================
// ** Cookie Warning  **
// *=========================================

const cookieBanner = document.querySelector('.cookie-warning-wrapper');
const cookieWarningButton = document.querySelector('.cookie-warning-button');

if (localStorage.getItem('cookieSeen') !== 'shown') {
  cookieBanner.classList.add('show-cookie-warning');
} else {
  cookieBanner.style.display = 'none';
}

cookieWarningButton.addEventListener(
  'click',
  () => {
    localStorage.setItem('cookieSeen', 'shown');
    cookieBanner.classList.remove('show-cookie-warning');
    cookieBanner.addEventListener('transitionend', () => {
      cookieBanner.style.display = 'none';
    });
  },
  { once: true }
);

// *=========================================
// ** Main  **
// *=========================================

// ********** Hiding Text area label on scroll **********
const textAreaLabel = document.querySelector('.text-area-label');
const textAreaInput = document.querySelector('.text-area-input');

function textAreaScrollHandler() {
  if (textAreaInput.scrollTop > 3) {
    textAreaLabel.classList.add('fade-out');
  } else {
    textAreaLabel.classList.remove('fade-out');
  }
}

textAreaInput.addEventListener('scroll', textAreaScrollHandler);

// ********** Scroll Trigger Examples **********

// TODO: Delete ScrollTrigger examples

//* Scrolltrigger in tween example
// gsap.to('.animation-test', {
//   scrollTrigger: {
//     trigger: '.animation-test',
//     start: 'top 90%',
//     end: 'top 10%',
//     scrub: 2,
//     markers: true,
//     toggleActions: 'resume pause reverse resume',
//   },
//   y: -200,
// });

// * Scroll Trigger Timeline
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.animation-test',
//     start: 'top 70%',
//     end: 'top 30%',
//     scrub: 2,
//     markers: true,
//     toggleActions: 'resume pause reverse resume',
//   },
// });

// * ScrollTrigger defaults example
ScrollTrigger.defaults({
  // markers: true,
});

// * ScrollTrigger instance example
// ScrollTrigger.create({
//   trigger: '.homepage-section-two',
//   start: 'top 90%',
//   end: 'bottom 10%',
//   // scroller: '#main-content',
//   // horizontal: true,
//   markers: true,
//   id: 'Test',
//   toggleClass: 'active',
//   onEnter: () => console.log('Enter'),
//   onLeave: () => console.log('Leave'),
//   onEnterBack: () => console.log('Enter again'),
//   onLeaveBack: () => console.log('Leave again'),
//   onUpdate: (self) => console.log('update', self.progress.toFixed(3)),
//   onToggle: (self) => console.log('toggled', self.isActive),
// });

// *=========================================
// ** Accessibility  **
// *=========================================

// * Adding focus outline class when tab key is used
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);
