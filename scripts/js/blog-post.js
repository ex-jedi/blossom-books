// *==============================================================================
// ** Blog Post JS  **
// *==============================================================================
// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab } from './utils.js';

// ********** Lib **********
import { mainNavTrigger, menuOpenerHandler, blogPostParagraphFadeIn, blogImageScrollResize } from './lib.js';

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

// ********** Blog post paragraph fade in **********
blogPostParagraphFadeIn();

// ********** Blog image scroll resize **********
blogImageScrollResize();
