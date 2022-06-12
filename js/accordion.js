$(document).ready(function() {
  $('.accordion__title').click(function(event) {
    $('.accordion__title').not($(this)).removeClass('accordion_active');
    $('.accordion__text').not($(this).next()).slideUp(300);
    $(this).toggleClass('accordion_active').next().slideToggle(400);
  });
})