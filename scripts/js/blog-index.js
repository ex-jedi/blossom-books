// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab } from './utils.js';

// ********** Lib **********
import { mainNavTrigger, menuOpenerHandler, blogIndexFadeIn } from './lib.js';

// ********** Cat subtitle show and hide **********

const catTitle = document.querySelector('.blog-index-page-subtitle');
const catList = document.querySelector('.blog-categories-ul');
const indexWrapper = document.querySelector('.blog-index-wrapper');

function categoryClickHandler() {
  catTitle.classList.toggle('blog-index-page-subtitle-reveal');
  catList.classList.toggle('blog-categories-ul-reveal');
  indexWrapper.classList.toggle('category-push-down');
}

catTitle.addEventListener('click', categoryClickHandler);

// *==============================================================================
// ** Imported  **
// *==============================================================================

// *=========================================
// ** Utils  **
// *=========================================

// ********** Cookie Warning **********
cookieWarning();

// ********** Tab Outline **********
window.addEventListener('keydown', handleFirstTab);

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Blog Article Title Fade In **********
blogIndexFadeIn();
