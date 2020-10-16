// *=========================================
// ** GSAP  **
// *=========================================
import { gsap } from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);


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
