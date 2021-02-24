$(function (){
    $('.feedback__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite:true,
        dots:true,
        arrows:false,
        cssEase: 'ease-out, 1s',
    });
});

$(document).ready(function () {
    $(".header__burger").click(function (event) {
      $(".header__burger,.navigation__nav").toggleClass("active");
    });
  });
  