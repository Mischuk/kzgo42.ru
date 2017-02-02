/*!
  News Carousel
*/
function newsCarouselVariables() {
  viewportWidth = $(window).width();
  $newsCarousel = $(".news-carousel");
  if( viewportWidth <= 390 ){
      newsRows = 2;
      newsSlides = 1;
      $(".news-carousel").removeClass('doubled');
  } else if( viewportWidth > 390 && viewportWidth <= 568 ){
      newsRows = 2;
      newsSlides = 2;
      $(".news-carousel").addClass('doubled');
  } else if( viewportWidth > 568 &&  viewportWidth < 960){
      newsRows = 1;
      newsSlides = 3;
      $(".news-carousel").removeClass('doubled');
  } else if( viewportWidth >= 960 ) {
    newsRows = 1;
    newsSlides = 4;
    $(".news-carousel").removeClass('doubled');
  }
}
function newsCarousel() {
  newsCarouselVariables();
  $newsCarousel.slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: newsSlides,
      slidesToScroll: newsSlides,
      rows: newsRows
  });
}
newsCarousel();

function newsCarouselReinitial() {
  newsCarouselVariables();
  $newsCarousel.slick('unslick');
  console.log('unslick');
  $newsCarousel.slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: newsSlides,
      slidesToScroll: newsSlides,
      rows: newsRows
  });
}
$(window).on('resize', function(){
  newsCarouselReinitial();
});
/*!
  end News Carousel
*/