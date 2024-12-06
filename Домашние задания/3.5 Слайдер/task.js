
(() => {

  const sliderItems = document.querySelectorAll('.slider__item');
  const dots = document.querySelectorAll('.slider__dot');
  document.querySelector('.slider__arrow_prev');
  document.querySelector('.slider__arrow_next');
  let currentSlideIdx = 0;
  selectSlide(0);

  function selectSlide(slideIdx) {
    sliderItems.forEach((item, idx) => {
      if (idx === slideIdx) {
        item.classList.add('slider__item_active');
        dots[idx].classList.add('slider__dot_active');
      } else {
        item.classList.remove('slider__item_active');
        dots[idx].classList.remove('slider__dot_active');
      }
    });
  }

  document.getElementsByClassName('slider__arrow_prev')[0].addEventListener('click', () => {
    currentSlideIdx = currentSlideIdx > 0 ? currentSlideIdx - 1 : sliderItems.length - 1;
    selectSlide(currentSlideIdx);
  });

  document.getElementsByClassName('slider__arrow_next')[0].addEventListener('click', () => {
    currentSlideIdx = currentSlideIdx < sliderItems.length - 1 ? currentSlideIdx + 1 : 0;
    selectSlide(currentSlideIdx);
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentSlideIdx = idx;
      selectSlide(currentSlideIdx);
    });
  });

})();
