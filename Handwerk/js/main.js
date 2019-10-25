/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

// const handwerk = {
//     init: function () {
//         $(document).on('mouseup', this.closeSelect.bind(this));
//         $(document).on('click', '.drop_select .i', this.chooseSelect.bind(this));
//     },
//     openSelect: function (e) {
//         e.next('.drop_select').addClass('open');
//     },
//     closeSelect: function (e) {
//         var container = $('.drop_select');
//         if (container.has(e.target).length === 0) container.removeClass('open');
//     },
//     chooseSelect: function (e) {
//         var target = $(e.currentTarget),
//             value = target.text();
//         $('.drop_select .i').removeClass('current');
//         target.addClass('current');
//         target.closest('.select').find('input').val(value);
//         $('.drop_select').removeClass('open');
//     }
// };

$(document).ready((function() {
    $('#contactFields__select').select2();
}));

$(document).ready((function () {

    $('.submenuAccordion').click((function () {
       $(this).toggleClass('submenuAccordion__collapse').next().slideToggle();
    }));

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

    // ACCORDION

    $('.cardHeader').click((function () {
        $(this).toggleClass('cardHeader__collapse').next().slideToggle();
    }));

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
