const slider = () => {
  const topSlider = document.querySelector(".top-slider");
  const slides = topSlider.querySelectorAll(".item");
  const timeInterval = 3000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
    elems[index].classList.add("slide-none");
    const slideContent = elems[index].querySelector(".table");
    slideContent.classList.remove("active");
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
    elems[index].classList.remove("slide-none");
    const slideContent = elems[index].querySelector(".table");
    slideContent.classList.add("active");
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "active");
  };

  const startSlide = (timer) => {
    interval = setInterval(autoSlide, timer);
  };

  startSlide(timeInterval);
};

export default slider;
