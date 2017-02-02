function leadCarousel() {
  $('.m_lead-carousel').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    infinite: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
  })
}
leadCarousel();