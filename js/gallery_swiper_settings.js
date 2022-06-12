var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
  768: {
      slidesPerView: 2,
      spaceBetween: 38
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});