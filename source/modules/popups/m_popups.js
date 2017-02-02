function popupForm() {
  $('.popup-button').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup form').on('submit', function(){
    $.magnificPopup.close();
    setTimeout(function(){
      $.magnificPopup.open({
              items: {
                  src: '#popup-ty'
              },
              type: 'inline',
              fixedContentPos: false,
              fixedBgPos: true,
              overflowY: 'auto',
              closeBtnInside: true,
              preloader: false,
              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in'
      });
    }, 350);
    return false;
  });

  $('.form-row input[type=file]').on('change', function(){
    if ( !$(this).val() == '' ) {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).parent().hide();
      $(this).parent().next().find('.value').text('Файл добавлен: '+filename);
      $(this).parent().next().show();
    }
  });

  $('.attach-result .remove').on('click', function(){
    $(this).text('');
    $(this).parent().hide();
    $(this).parent().prev().show();
    $(this).parent().prev().find('input[type=file]').val('');
  });
}
popupForm();