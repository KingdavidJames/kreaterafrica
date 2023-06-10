(function ($) {
  "use strict";

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      navText: [
        // '<span class="bi bi-chevron-left"></span>',
        // '<span class="bi bi-chevron-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 2,
        },
        1500: {
          items: 2,
        },
      },
    });
  }
})(window.jQuery);
