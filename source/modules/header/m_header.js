function mobileMenu() {
  $('.mobile-menu-trigger').on('click', function(){
    $(this).toggleClass('open');
    $('.m_header .bottom .nav').toggleClass('open');
  });
}
mobileMenu();

function headerSearch() {
  var $input = $('#js-headerSearch');
  var $trigger = $('.search-trigger');
  $trigger.on('click', function(){
    $(this).parent().addClass('open');
    $input.focus();
  });

  $(document).mouseup(function (e) {
    var container = $('.m_header .search');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.m_header .search').removeClass('open');
    }
  });
}
headerSearch();