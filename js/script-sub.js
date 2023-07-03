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

("use strict");
const startShipping = document.querySelector(".start-shipping");
const shipCalculator = document.querySelector(".ship-calculator");

const shipContent = document.getElementById("ship-content");
const calculatorContent = document.getElementById("ship-calc");

// For Text
const textStyle = document.querySelector(".start-ship-text");
const noStyle = document.querySelector(".no-style");

// For Icon
const iconStyle = document.querySelector(".start-ship-icon");
const noIconStyle = document.querySelector(".no-icon-style");

startShipping.addEventListener("click", function () {
  shipContent.classList.remove("hidden");
  calculatorContent.classList.add("hidden");

  textStyle.classList.add("start-ship-text");
  noStyle.classList.remove("start-ship-text");

  iconStyle.classList.add("start-ship-icon");
  noIconStyle.classList.remove("start-ship-icon");
});

shipCalculator.addEventListener("click", function () {
  calculatorContent.classList.remove("hidden");
  shipContent.classList.add("hidden");

  noStyle.classList.add("start-ship-text");
  textStyle.classList.remove("start-ship-text");

  noIconStyle.classList.add("start-ship-icon");
  iconStyle.classList.remove("start-ship-icon");
});
