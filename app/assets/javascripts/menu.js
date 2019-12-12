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
  const header = $('header');

  // const windowSize = window.innerHeight
  // const windowWidth = window.innerWidth

  function getScroll(){
    const scrollHeight = window.pageYOffset;
    return scrollHeight
  }

  window.addEventListener('scroll', function(){
    const scrollHeight = getScroll();

    if( scrollHeight > 200 ){
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  })
});
