/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function () {

    $('.navbar-toggler').click((function(){
        $(this).toggleClass('open');
    }));

   $('.clientsCarousel').slick({
       arrows: true,
       mobileFirst: true,
       centerMode: true,
       infinite: true,
       focusOnSelect: true,
       slidesToShow: 3,
       prevArrow: $('.clientsCarousel__arrow--prev'),
       nextArrow: $('.clientsCarousel__arrow--next'),
       slidesToScroll: 1,
       responsive: [
           {
               breakpoint: 1199,
               settings: {
                   slidesToShow: 5,
                   slidesToScroll: 1
               }
           }
       ]
   });

    $('.feedbackCarousel').slick({
        mobileFirst: true,
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });

    $('.knownFromCarousel').slick({
        arrows: true,
        mobileFirst: true,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        prevArrow: $('.knownFromCarousel__arrow--prev'),
        nextArrow: $('.knownFromCarousel__arrow--next'),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }
        ]
    });
}));