// *==============================================================================
// ** 404 & 403 Pages  **
// *==============================================================================

// *=========================================
// ** Picture Switcher  **
// *=========================================

const images = document.querySelectorAll('.error-page-main-image');

//* Copied from homepage
const headerImage = document.querySelectorAll('.header-main-image');
function headerImageChange() {
  headerImage.forEach((image) => {
    // console.log(image);
    if (image.classList.contains('header-main-image-showing')) {
      image.classList.remove('header-main-image-showing');
    } else {
      image.classList.add('header-main-image-showing');
    }
  });
}

(function loop(min = 1000, max = 6000, randomNumber = Math.random()) {
  const rand = Math.floor(randomNumber * (max - min) + min);
  setTimeout(() => {
    headerImageChange();
    loop();
  }, rand);
})();
