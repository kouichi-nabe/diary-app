$(document).on('turbolinks:load', function () {
  var notice_tabs = $('.follow__list__head .follow__list__head__item');

  notice_tabs.on('click', function(){
    notice_tabs.removeClass('active');
    $(this).addClass('active');

    var notice_tab_child = $('.follow__list__content__list');
    notice_tab_child.removeClass('active');
    if($(this).data('tab') == 1) {
      $('.follow__list__content__list[data-tab=1]').addClass('active');
    } else if ($(this).data('tab') == 2) {
      $('.follow__list__content__list[data-tab=2]').addClass('active');
    }
  })
})
