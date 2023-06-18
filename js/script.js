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
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

var btn = $("#scroll-button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 450) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
