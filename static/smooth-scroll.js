// smooth-scroll.js
$(document).ready(function () {
  // Smooth scroll effect for anchor links
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Smooth scroll effect for navbar links
  $('.navbar-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
});
