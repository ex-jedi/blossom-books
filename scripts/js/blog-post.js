// *==============================================================================
// ** Blog Post JS  **
// *==============================================================================
// *=========================================
// ** Imports  **
// *=========================================

// ********** Utils **********
import { cookieWarning, handleFirstTab, reframe, mainLogoLink } from './utils.js';

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

// ********** Add domain to logo template for Schema markup  **********
mainLogoLink();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Blog post paragraph fade in **********
blogPostParagraphFadeIn();

// ********** Blog image scroll resize **********
blogImageScrollResize();
