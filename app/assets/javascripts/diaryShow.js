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

  //like_diary
  $('.like__form').on('click', function(){
    $('.like__form__link').toggleClass('active');
  })
  $('.like__form__link').on('click', function(){
    var count = $('.like__form__link__count').text();
    if(count > 0 && $(this).hasClass('active')){
      var newCount = parseInt(count) + 1;
      console.log('oj')
      $('.like__form__link__count').text(newCount);
    } else {
      var newCount = parseInt(count) - 1;
      console.log('pj')
      $('.like__form__link__count').text(newCount);
    }
  })
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
