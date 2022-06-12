var swiper = new Swiper(".events__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
  768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
  1024: {
      slidesPerView: 3,
      spaceBetween: 27
    },
  1700: {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  }, 
  spaceBetween: 30,
  // effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});