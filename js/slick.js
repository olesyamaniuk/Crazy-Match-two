$(function () {
  $(".w-b-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".w-b-gallery-list-left",
    nextArrow: ".w-b-gallery-list-right",
  });
});

$(function () {
  $(".w-b-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".w-b-why-list-left",
    nextArrow: ".w-b-why-list-right",
  });
});
