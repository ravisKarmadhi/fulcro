import "slick-carousel";

export class Plugins {

  init() {
    $('.our-service-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    $('.news-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1
    });
    $('.clients-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1
    });

    $(".capabilities-slider").slick({
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.capablities-slider-btn .slick--prev',
      nextArrow: '.capablities-slider-btn .slick--next'
    });
    $(".slider-testimonial").slick({
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    $(".single-project-slider").slick({
      dots: true,
      infinite: true,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.single-project-btn .slick--prev',
      nextArrow: '.single-project-btn .slick--next'
    });
  }
  slickSLider() { }
}
