// *=========================================
// ** Imports  **
// *=========================================

import { cookieWarning, mainLogoLink } from './utils.js';

import { mainNavTrigger, menuOpenerHandler } from './lib.js';

// *==============================================================================
// ** Imported  **
// *==============================================================================

// *=========================================
// ** Utils  **
// *=========================================

// ********** Cookie warning **********
cookieWarning();

// ********** Add domain to logo template for Schema markup  **********

mainLogoLink();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);
