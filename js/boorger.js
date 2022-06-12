document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.querySelector(".burger").classList.add("_active");
  document.querySelector('body').classList.add('lock');
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".burger").classList.remove("_active");
  document.querySelector('body').classList.remove('lock');
})