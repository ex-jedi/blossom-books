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

// All in a function for export
function headerPlantAnimation() {
  // Responsive trigger hooks for ScrollTrigger
  // MatchMedia media queries
  const mediaNineHundred = window.matchMedia('(max-width: 800px)');

  // Change trigger points on screen size
  let plantAnimationStart = 'top 45%';
  let plantAnimationEnd = 'bottom 65%';
  if (mediaNineHundred.matches) {
    plantAnimationStart = 'top 70%';
    plantAnimationEnd = 'bottom 70%';
  }

  const plantIllustration = document.querySelectorAll('.header-plant-image-wrapper svg path');

  gsap.fromTo(
    plantIllustration,
    { drawSVG: 0 },
    {
      duration: 3,
      drawSVG: '100%',
      scrollTrigger: {
        trigger: '.header-plant-image-wrapper',
        start: plantAnimationStart,
        end: plantAnimationEnd,
        id: 'Plant',
        scrub: 1,
      },
    }
  );
}

headerPlantAnimation();
