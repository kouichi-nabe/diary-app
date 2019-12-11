$(function(){
  $('.menu-head-a,.menu-inner-a').hover(function(){
    $('.menu-inner-a').addClass('active');
  }, function(){
    $('.menu-inner-a').removeClass('active');
  });

  // menu hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
})
