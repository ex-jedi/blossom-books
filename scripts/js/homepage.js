// *=========================================
// ** GSAP  **
// *=========================================

// ********** Import & Register **********

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// ********** GSAP Scroll Trigger Animations **********

// * Homepage section one change colour on scroll
ScrollTrigger.create({
  trigger: '.homepage-section-one',
  start: 'top center',
  end: 'bottom center',
  id: 'Homepage Section',
  toggleClass: { targets: '.homepage-section-one, .main-header, .section-one-box-paragraph', className: 'active' },
});

// * Homepage section two change colour on scroll
ScrollTrigger.create({
  trigger: '.homepage-section-two',
  start: 'top center',
  end: 'bottom center',
  id: 'Homepage Section',
  toggleClass: { targets: '.homepage-section-two', className: 'active' },
});

// *=========================================
// ** Header Image Switcher  **
// *=========================================

const headerImage = document.querySelectorAll('.header-main-image');
function headerImageChange() {
  headerImage.forEach((image) => {
    // console.log(image);
    if (image.classList.contains('header-main-image-showing')) {
      image.classList.remove('header-main-image-showing');
    } else {
      image.classList.add('header-main-image-showing');
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

// ********** Plant Animation **********

// const tl = gsap.timeline({
//   ScrollTrigger: {
//     trigger: '.header-plant-image-wrapper',
//     start: 'top center',
//     end: 'bottom center',
//     id: 'Homepage Section',
//     markers: true,
//   },
// });

// tl.addLabel('lines')
//   .addLabel('fill', 3)
//   .fromTo('.cls-3', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-3', { fill: '#fff' }, { duration: 1, fill: '#ebe5e4' }, 'fill')
//   .fromTo('.cls-4', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-4', { fill: '#fff' }, { duration: 1, fill: '#c9bbb7' }, 'fill')
//   .fromTo('.cls-5', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-5', { fill: '#fff' }, { duration: 1, fill: '#c9bbb7' }, 'fill')
//   .fromTo('.cls-6', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-6', { fill: '#fff' }, { duration: 1, fill: '#e1d8d6' }, 'fill')
//   .fromTo('.cls-7', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-7', { fill: '#fff' }, { duration: 1, fill: '#f3f0ef' }, 'fill')
//   .fromTo('.cls-8', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-8', { fill: '#fff' }, { duration: 1, fill: '#ded5d3' }, 'fill')
//   .fromTo('.cls-9', { drawSVG: 0 }, { duration: 3, drawSVG: '100%' }, 'start')
//   .fromTo('.cls-9', { fill: '#fff' }, { duration: 1, fill: '#fbfafa' }, 'fill');

// ScrollTrigger.create({
//   trigger: '.header-plant-image-wrapper',
//   start: 'top center',
//   end: 'bottom center',
//   id: 'Homepage Section',
//   toggleClass: 'working',
//   markers: true,
// });
