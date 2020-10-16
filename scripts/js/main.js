// *=========================================
// ** GSAP  **
// *=========================================

// ********** Import & Register **********

import { gsap } from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);

// ********** GSAP Scroll Trigger Animations **********

ScrollTrigger.defaults({
  markers: true,
});

ScrollTrigger.create({
  trigger: '.homepage-section-one',
  start: 'top center',
  end: 'bottom center',
  markers: true,
  id: 'Homepage Section',
  toggleClass: 'active',
  onEnter: () => console.log('Enter'),
  onLeave: () => console.log('Leave'),
  onEnterBack: () => console.log('Enter again'),
  onLeaveBack: () => console.log('Leave again'),
  onUpdate: (self) => console.log('update', self.progress.toFixed(3)),
  onToggle: (self) => console.log('toggled', self.isActive),
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

// tl.to('.animation-test', {
//   y: -200,
//   rotation: 360,
//   ease: 'none',
// });

// * ScrollTrigger defaults example
ScrollTrigger.defaults({
  markers: true,
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
