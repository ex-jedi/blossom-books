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
