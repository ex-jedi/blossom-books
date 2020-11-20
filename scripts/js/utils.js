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

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { cookieWarning, handleFirstTab, textAreaInput, textAreaScrollHandler };
