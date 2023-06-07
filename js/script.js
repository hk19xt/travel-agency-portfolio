jQuery(document).ready(function ($) {
  $("#owl-demo").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

jQuery(document).ready(function ($) {
  $("#owl-packagedemo").owlCarousel({
    loop: true,
    margin: 70,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
