// *=========================================
// ** Cookie Warning  **
// *=========================================

function cookieWarning() {
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
}

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

// *=========================================
// ** Hiding Text area label on scroll  **
// *=========================================

const textAreaLabel = document.querySelector('.text-area-label');
const textAreaInput = document.querySelector('.text-area-input');

function textAreaScrollHandler() {
  if (textAreaInput.scrollTop > 3) {
    textAreaLabel.classList.add('fade-out');
  } else if (textAreaInput.scrollTop > 20) {
    textAreaInput.style.lineHeight = '10rem';
  } else {
    textAreaLabel.classList.remove('fade-out');
  }
}

// *=========================================
// ** Add domain to logo template for Schema markup  **
// *=========================================
const logoLink = document.querySelector('.main-logo-link');
const pageUrl = window.location.origin;

function mainLogoLink() {
  logoLink.href = pageUrl;
}

// *=========================================
// ** Reframe.js  **
// *=========================================

/*
  reframe.js 🖼
  -------------
  takes 2 args:
  => target: targeted <element>
  => cname: optional custom classname
  -------------
  defines the height/width ratio of the targeted <element>
*/
function reframe(target, cName) {
  let frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  const c = cName || 'js-reframe';
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    // makes sure reframe is not run more than 1x ✔️
    const hasClass = frame.className.split(' ').indexOf(c) !== -1;

    if (hasClass || frame.style.width.indexOf('%') > -1) continue;

    // get height width attributes
    const h = frame.getAttribute('height') || frame.offsetHeight;
    const w = frame.getAttribute('width') || frame.offsetWidth;

    // general targeted <element> sizes
    const padding = (h / w) * 100;

    // created element <wrapper> of general reframed item
    // => set necessary styles of created element <wrapper>
    const div = document.createElement('div');
    div.className = c;
    const divStyles = div.style;
    divStyles.position = 'relative';
    divStyles.width = '100%';
    divStyles.paddingTop = `${padding}%`;

    // set necessary styles of targeted <element>
    const frameStyle = frame.style;
    frameStyle.position = 'absolute';
    frameStyle.width = '100%';
    frameStyle.height = '100%';
    frameStyle.left = '0';
    frameStyle.top = '0';

    // reframe targeted <element>
    frame.parentNode.insertBefore(div, frame);
    frame.parentNode.removeChild(frame);
    div.appendChild(frame);
  }
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler, reframe, mainLogoLink };
