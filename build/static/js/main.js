$(document).ready(function(){
    $('.slider_s__content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:$('.slider_s__arrow--right'),
        prevArrow:$('.slider_s__arrow--left')
    });
});