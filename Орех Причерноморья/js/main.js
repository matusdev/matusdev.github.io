$('.box__slider_1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_1'),
    nextArrow: $('#arrow-next_1')
});

$('.box__slider_2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_2'),
    nextArrow: $('#arrow-next_2')
});

$('.box__slider_3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_3'),
    nextArrow: $('#arrow-next_3')
});

$('.box__slider_4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_4'),
    nextArrow: $('#arrow-next_4')
});

$('.box__slider_5').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_5'),
    nextArrow: $('#arrow-next_5')
});

$('.box__slider_6').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow-prev_6'),
    nextArrow: $('#arrow-next_6')
});

$('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider-button-prev'),
    nextArrow: $('.slider-button-next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
});


$('.manufacturer__slider').slick({
    infinite: true,
    slidesToScroll: true,
    slidesToShow: true,
    arrows: true,
    prevArrow: $('.manu_arrow_prev'),
    nextArrow: $('.manu_arrow_next')
});