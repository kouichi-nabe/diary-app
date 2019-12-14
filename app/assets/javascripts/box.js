$(document).on('turbolinks:load', function () {
  if( $(window).width() >= 800 ){
    hsize = $(window).width() / 3;
    $(".diary-box").css("height", hsize + "px");
  } else {
    hsize = $(window).width() / 2;
    $(".diary-box").css("height", hsize + "px");
  }
});

$(window).resize(function () {
  if( $(window).width() >= 800 ){
    hsize = $(window).width() / 3;
    $(".diary-box").css("height", hsize + "px");
  } else {
    hsize = $(window).width() / 2;
    $(".diary-box").css("height", hsize + "px");
  }
});

// $(function(){
//   const diaryBoxs = document.querySelectorAll('.diary-box');
//
//   diaryBoxs.forEach( function(value, index){
//     if( index > 10 ){
//       value.style.display = 'none';
//       value.classList.add('hide')
//     }
//   })
// })
//
// $(function(){
//   $(window).scroll(function(){
//     $('.diary-box.hide').each(function(){
//       const top = $(this).offset().top;
//       const scroll = $(window).scrollTop();
//       // const windowHeight = $(window).height();
//       if ( scroll > top - 50 ){
//         // $(this).fadeIn();
//         $('.diary-box.hide').delay(1000).queue(function(){
//            $(this).fadeIn();
//         });
//       }
//     })
//   })
// })
