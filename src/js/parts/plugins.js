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
  }
  slickSLider() { }
}
