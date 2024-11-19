(function ($) {
    "use strict";

    //preloader
    $(window).load(function() {
      $("#loading").fadeOut(500);
    })

    // // sticky
      var wind = $(window);
      var sticky = $('#sticky-header');
      wind.on('scroll', function () {
          var scroll = wind.scrollTop();
          if (scroll < 100) {
              sticky.removeClass('sticky');
          } else {
              sticky.addClass('sticky');
          }
      });

      // one page nav
      $('#nav').onePageNav();


    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    /*Counter */
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    /* video popup*/
    $('.video-popup').magnificPopup({type:'iframe'});

   /*slider*/
   $('.testimonial-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.test-imge-active'
  });
  $('.test-imge-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-active',
    dots: false,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      
    ]
  });  



  //brand slider
   
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      
    ]
  });

  /*menmenu*/
  jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

})(jQuery);
