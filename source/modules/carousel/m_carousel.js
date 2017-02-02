$('.carousel-preview').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.carousel-thumbs'
});
$('.carousel-thumbs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.carousel-preview',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 8
      }
    }
  ]
});