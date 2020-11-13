// *=========================================
// ** GSAP  **
// *=========================================

// ********** Import & Register **********

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

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

const plantIllustration = document.querySelectorAll('.header-plant-image-wrapper svg path');
console.log(plantIllustration);

const plantDrawTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.header-plant-image-wrapper',
    start: 'top 45%',
    end: 'bottom 65%',
    id: 'Plant',
    markers: true,
    scrub: 1,
  },
});

plantDrawTimeline.fromTo(plantIllustration, { drawSVG: 0 }, { duration: 30, drawSVG: '100%' });
