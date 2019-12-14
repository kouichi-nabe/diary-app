$(document).on('turbolinks:load', function(){
  // menu
  var header = $('header');

  function getScroll(){
    var scrollHeight = window.pageYOffset;
    return scrollHeight
  }

  window.addEventListener('scroll', function(){
    var scrollHeight = getScroll();

    if( scrollHeight > 80 ){
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  })

  // menu sub
  $('.menu-head-b,.menu-inner-b').hover(function(){
    console.log('ok')
    $('.menu-inner-b').addClass('active');
  }, function(){
    $('.menu-inner-b').removeClass('active');
  });

  // menu hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});
