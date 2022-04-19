document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".header__search").classList.add("header__search__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__search");
  if (!target.closest(".form-container")) {
  form.classList.remove("header__search__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})