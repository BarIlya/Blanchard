var swiper = new Swiper(".partners__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 49
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});