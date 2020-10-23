// *=========================================
// ** Header Image Switcher  **
// *=========================================

const aboutMeHeaderImage = document.querySelectorAll('.about-me-header-image');
function headerImageChange() {
  aboutMeHeaderImage.forEach((image) => {
    // console.log(image);
    if (image.classList.contains('about-me-header-image-showing')) {
      image.classList.remove('about-me-header-image-showing');
    } else {
      image.classList.add('about-me-header-image-showing');
    }
  });
}

(function loop(min = 1000, max = 6000, randomNumber = Math.random()) {
  const rand = Math.floor(randomNumber * (max - min) + min);
  console.log(rand);
  setTimeout(() => {
    headerImageChange();
    loop();
  }, rand);
})();

// *=========================================
// ** Fade In Paragraphs  **
// *=========================================

const fadeInParagraph = document.querySelectorAll('.about-me-section p');
fadeInParagraph.forEach((paragraph) => paragraph.classList.add('fade-in-rotate'));
