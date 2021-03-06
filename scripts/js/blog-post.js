// *==============================================================================
// ** Blog Post JS  **
// *==============================================================================
// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab, reframe } from './utils.js';

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

// ********** Reframe **********
reframe('.blog-video-embed iframe');

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Blog post paragraph fade in **********
blogPostParagraphFadeIn();

// ********** Blog image scroll resize **********
blogImageScrollResize();
