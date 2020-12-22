// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// *=========================================
// ** Main Nav  **
// *=========================================
const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.main-nav-link');

// Restore pointerevents
function pointerEventsRestore() {
  mainNavTrigger.style.pointerEvents = 'auto';
  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    navLink.forEach((link) => link.removeAttribute('style'));
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
  if (mainNav.dataset.state === 'closed') {
    openMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'open';
  } else {
    closeMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'closed';
  }
}

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

// *=========================================
// ** Fading in paragraphs  **
// *=========================================

function fadeInRotateParagraphs() {
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
          invalidateOnRefresh: true,
          markers: true,
        });
      },

      // Tablet
      '(max-width: 1099px) and (min-width: 700px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -100px',
          invalidateOnRefresh: true,
          markers: true,
        });
      },

      // Mobile
      '(max-width: 699px) and (min-width: 450px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -300px',
          invalidateOnRefresh: true,
          markers: true,
        });
      },

      // Small Mobile
      '(max-width: 449px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -450px',
          invalidateOnRefresh: true,
          markers: true,
        });
      },
    });
  });
}

// *=========================================
// ** Contact form color change  **
// *=========================================

function contactFormScrollColourChange() {
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
}

// *==============================================================================
// ** Homepage  **
// *==============================================================================
// *=========================================
// ** Homepage Header Plant Animation  **
// *=========================================

// All in a function for export
function headerPlantAnimation() {
  // Responsive trigger hooks for ScrollTrigger
  // MatchMedia media queries
  const mediaNineHundred = window.matchMedia('(max-width: 850px)');

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

function scrollChangeColourOne() {
  // * Homepage section one change colour on scroll
  ScrollTrigger.create({
    trigger: '.homepage-section-one',
    start: 'top center',
    end: 'bottom center',
    id: 'Homepage Section One',
    toggleClass: { targets: '.homepage-section-one, .main-header, .section-one-box-paragraph', className: 'active' },
  });
}

function scrollChangeColourTwo() {
  // * Homepage section two change colour on scroll
  ScrollTrigger.create({
    trigger: '.homepage-section-two',
    start: 'top center',
    end: 'bottom center',
    id: 'Homepage Section Two',
    toggleClass: { targets: '.homepage-section-two, .main-nav', className: 'active' },
  });
}

// ********** Homepage Mug Animation **********

function steamingCup() {
  const mugSteam = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
  });

  mugSteam
    .fromTo('.st1', { drawSVG: 0 }, { drawSVG: '25% 100%', duration: 2, ease: 'power1.in' })
    .to('.st1', { drawSVG: '100% 100%', duration: 2, ease: 'power1.out' });
}

// *==============================================================================
// ** Services Page  **
// *==============================================================================

// ********** Section Colour Change **********

function servicesScrollColourChange() {
  ScrollTrigger.create({
    trigger: '.services-section',
    start: 'top center',
    end: 'bottom center',
    id: 'About me section',
    toggleClass: { targets: '.services-section, .arrow-wrapper', className: 'active' },
  });
}

// *==============================================================================
// ** About Me Page  **
// *==============================================================================

// ********** About Me Section Colour Change **********

function aboutMeSectionColourChange() {
  ScrollTrigger.create({
    trigger: '.about-me-section',
    start: 'top center',
    end: 'bottom center',
    id: 'About me section',
    toggleClass: { targets: '.about-me-section, .arrow-wrapper', className: 'active' },
  });
}

// *==============================================================================
// ** Blog Index  **
// *==============================================================================
// ********** Fading in article titles **********

// Grabbing blog index titles
function blogIndexFadeIn() {
  const fadeInParagraphs = gsap.utils.toArray('.blog-index-title');

  fadeInParagraphs.forEach((title) => {
    ScrollTrigger.create({
      trigger: title,
      toggleClass: 'title-reveal',
      start: 'top 98%',
      end: 'bottom top',
    });
  });
}

// *==============================================================================
// ** Blog Post  **
// *==============================================================================

// ********** Blog post paragraph fade in **********
function blogPostParagraphFadeIn() {
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
}

// ********** Blog main image resize on scroll **********
function blogImageScrollResize() {
  const blogPostImage = document.querySelectorAll('.blog-post-image');

  blogPostImage.forEach((image) => {
    ScrollTrigger.matchMedia({
      // Desktop
      '(min-width: 851px)': function () {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
            toggleActions: 'resume',
          },
          scale: 1.3,
        });
      },
      // Tablet / Mobile
      '(max-width: 850px)': function () {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: 1,
            toggleActions: 'resume',
          },
          scale: 1.3,
        });
      },
    });
  });
}

// *=========================================
// ** Rerun fade in para's on refresh  **
// *=========================================
// * When the window is resized the scroll triggers end up in the wrong place. This is the temporary patch

function widthChange(element) {
  const currentWidth = element.innerWidth;
  element.addEventListener('resize', function () {
    if (element.innerWidth !== currentWidth) {
      console.log('Refresh');
      fadeInRotateParagraphs();
    }
  });
}

// *=========================================
// ** Exports  **
// *=========================================

export {
  menuOpenerHandler,
  mainNavTrigger,
  headerPlantAnimation,
  scrollChangeColourOne,
  scrollChangeColourTwo,
  steamingCup,
  contactFormScrollColourChange,
  fadeInRotateParagraphs,
  servicesScrollColourChange,
  aboutMeSectionColourChange,
  blogIndexFadeIn,
  blogPostParagraphFadeIn,
  blogImageScrollResize,
  widthChange,
};
