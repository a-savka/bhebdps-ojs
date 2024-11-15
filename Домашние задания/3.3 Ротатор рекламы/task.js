function resetActive(slides) {
  slides.forEach(slide => slide.classList.remove('rotator__case_active'));
}

function makeRotator(parent) {

  const slides = [ ...parent.querySelectorAll('.rotator__case') ];
  let activeSlide = 0;

  slides.forEach(slide => slide.style.color = slide.dataset.color);

  function getActiveSpeed() {
    return slides[activeSlide].dataset.speed;
  }

  function triggerSlides() {
    resetActive(slides);
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add('rotator__case_active');
    setTimeout(triggerSlides, getActiveSpeed());
  }

  setTimeout(triggerSlides,  getActiveSpeed());
}

makeRotator(document.querySelector('.card'));
makeRotator(document.querySelector('.card_2'));
