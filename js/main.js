/** First Slider */
$(document).ready(function(e){
    $('.slider-one').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    useCSS: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
    });
});

/** Second Slider */
$(document).ready(function(){
    $('.slider-two').slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000
    });
});


