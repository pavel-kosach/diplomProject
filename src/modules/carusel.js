import Swiper, { Navigation } from "swiper";

export const swiperFunc = () => {
  const swiper = new Swiper(".swiper-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
