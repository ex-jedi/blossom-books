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

if (textAreaInput) textAreaInput.addEventListener('scroll', textAreaScrollHandler);

// *=========================================
// ** Main Nav  **
// *=========================================
const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.main-nav-link');

// Add aria-expanded false to responsive menu
let menuOpen = false;

// Restore pointerevents
function pointerEventsRestore() {
  mainNavTrigger.style.pointerEvents = 'auto';
  if (!menuOpen) {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
  } else {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  }
}

// * Open menu

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out', duration: 1, delay: 0 },
});

openMenuTl
  .to(mainNav, { y: '0%' })
  .addLabel('colorChange', '-=0.3')
  .to(navLink, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
  .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
  .to(mainNavTrigger, { color: '#6c9184', onComplete: pointerEventsRestore }, 'colorChange');

// * Close menu

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.in', duration: 1, delay: 0 },
});

closeMenuTl
  .to(navLink, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
  .addLabel('colorChange', '-=0.5')
  .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
  .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
  .to(mainNav, { y: '120%', onComplete: pointerEventsRestore }, 'colorChange');

function menuOpenerHandler() {
  if (!menuOpen) {
    openMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    menuOpen = true;
  } else {
    closeMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    menuOpen = false;
  }
}

mainNavTrigger.addEventListener('click', menuOpenerHandler);

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
