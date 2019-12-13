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

document.addEventListener('DOMContentLoaded', function(){
  var header = $('header');

  function getScroll(){
    var scrollHeight = window.pageYOffset;
    return scrollHeight
  }

  window.addEventListener('scroll', function(){
    var scrollHeight = getScroll();

    if( scrollHeight > 200 ){
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  })
});
