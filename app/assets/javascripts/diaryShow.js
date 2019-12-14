$(document).on('turbolinks:load', function () {
  headsize = $(window).width() / 1.8;
  bottomsize = $(window).width() / 3;

  //three images
  $(".three__images__head__image").css("height", headsize + "px");
  $(".three__images__bottom__image").css("height", bottomsize + "px");

  //two images
  $(".two__images__head__image").css("height", headsize + "px");
  $(".two__images__bottom__image").css("height", bottomsize + "px");

  //one images
  $(".one__images__head__image").css("height", headsize + "px");
});

$(window).resize(function () {
  headsize = $(window).width() / 1.8;
  bottomsize = $(window).width() / 3;

  //three images
  $(".three__images__head__image").css("height", headsize + "px");
  $(".three__images__bottom__image").css("height", bottomsize + "px");

  //two images
  $(".two__images__head__image").css("height", headsize + "px");
  $(".two__images__bottom__image").css("height", bottomsize + "px");

  //one images
  $(".one__images__head__image").css("height", headsize + "px");
});
