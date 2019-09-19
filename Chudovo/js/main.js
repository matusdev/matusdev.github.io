/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function(){
    function mainSlider() {
        $('.main-slider__carousel').slick({
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 10000,
                arrows: false,
                dots: true
                // respondTo: 'slider'
            }
        );
    }

    $('#mainSlick').on('beforeChange', (function(event, slick, currentSlide, nextSlide){
        var current = $('.slick-current');
        current.html(current.html());
    }));

    if (window.innerWidth > 991) {
        mainSlider();
    }

    // $(window).on('resize orientationchange', function(){
    //     console.log('test')
    //     if (window.innerWidth > 991) {
    //         mainSlider()
    //     }
    // });


    // if ($('#mainSlick').length > 0){
    //     var video = $('#mainSlick .slick-active').find('video').get(0).play();
    //     $('#mainSlick').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //         $('#mainSlick .slick-slide').find('video').get(0).pause();
    //         var video = $('#mainSlick .slick-active').find('video').get(0).play();
    //     });
    // }

    if ($('.feedback__slider').length > 0) {
        var rev = $('.feedback__slider');
        rev.on('init', (function(event, slick, currentSlide) {
            var
                cur = $(slick.$slides[slick.currentSlide]),
                next = cur.next(),
                prev = cur.prev();
            prev.addClass('slick-sprev');
            next.addClass('slick-snext');
            cur.removeClass('slick-snext').removeClass('slick-sprev');
            slick.$prev = prev;
            slick.$next = next;
        })).on('beforeChange', (function(event, slick, currentSlide, nextSlide) {
            console.log('beforeChange');
            var
                cur = $(slick.$slides[nextSlide]);
            console.log(slick.$prev, slick.$next);
            slick.$prev.removeClass('slick-sprev');
            slick.$next.removeClass('slick-snext');
            next = cur.next(),
                prev = cur.prev();
            prev.prev();
            prev.next();
            prev.addClass('slick-sprev');
            next.addClass('slick-snext');
            slick.$prev = prev;
            slick.$next = next;
            cur.removeClass('slick-next').removeClass('slick-sprev');
        }));
        rev.slick({
            speed: 1000,
            arrows: true,
            dots: false,
            focusOnSelect: true,
            prevArrow: $('.feedback__arrow--left'),
            nextArrow: $('.feedback__arrow--right'),
            infinite: true,
            centerMode: true,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
            swipe: true,
            customPaging: function(slider, i) {
                return '';
            },
            /*infinite: false,*/
        });
    }



    // $('.feedback__slider')
    //     .on('afterChange init', function(event, slick, direction){
    //             // console.log('afterChange/init', event, slick, slick.$slides);
    //             // remove all prev/next
    //             slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
    //
    //             // find current slide
    //             for (var i = 0; i < slick.$slides.length; i++)
    //             {
    //                 var $slide = $(slick.$slides[i]);
    //                 if ($slide.hasClass('slick-current')) {
    //                     // update DOM siblings
    //                     $slide.prev().addClass('prevSlide');
    //                     $slide.next().addClass('nextSlide');
    //                     break;
    //                 }
    //             }
    //         }
    //     )
    //     .on('beforeChange', function(event, slick) {
    //         // optional, but cleaner maybe
    //         // remove all prev/next
    //         slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
    //     })
    //     .slick({
    //     adaptiveHeight: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     prevArrow: $('.feedback__arrow--left'),
    //     nextArrow: $('.feedback__arrow--right'),
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false
    //             }
    //         }
    //     ]
    // });

    $('.arrow').click((function () {
        if ($(window).width() < 1200) {
            $(this).next().slideToggle();
        }
    }));

    function changeMenuPos(){
        var element = document.getElementById("header");
        var desiredPosition = 20;
        if(window.pageYOffset >= desiredPosition){
            element.className = 'header header--fixed';
        }
        else {
            element.className = 'header';
        }
    }
    if ($('.requirements-form__input-file').length > 0) {
        // INPUT FILE
        var realFileBtn = document.querySelector("#requFormFile");
        var customBtn = document.querySelector("#chooseButton");
        var submitBtn = document.querySelector('.requirements-form__submit');
        var clearBtn = document.querySelector('#fileClear');
        var customTxt = document.querySelector("#fileText");

        customBtn.addEventListener('click', (function() {
            realFileBtn.click();
        }));

        realFileBtn.addEventListener('change', (function(){
            if (realFileBtn.value){
                var realFileVal = realFileBtn.value.replace(/^.*[\\\/]/, '')
                $(customTxt).text(realFileVal);
                $(this).closest('.requirements-form__form').addClass('file-uploaded');
            }
            else{
                customTxt.innerHTML = 'pdf, docx, doc, txt (max filesize 5mb)';
                $(this).closest('.requirements-form__form').removeClass('file-uploaded');
            }
        }));

        $('#fileClear').on('click', (function(){
            $(this).closest('.requirements-form__input-file').find('#requFormFile').val('');
            customTxt.innerHTML = 'pdf, docx, doc, txt (max filesize 5mb)';
            $(this).closest('.requirements-form__form').removeClass('file-uploaded');
        }));

        // function f() {
        //     if ($('#requFormFile').get(0).files.length >= 1) {
        //         console.log("111");
        //         customBtn.style.backgroundColor = '#d2d2d2';
        //         customBtn.style.color = '#ffffff';
        //         submitBtn.style.backgroundColor = '#98db55';
        //         clearBtn.style.display = 'inlineBlock';
        //     }
        //     else if ($('#requFormFile').get(0).files.length == 0) {
        //         console.log("222");
        //     }
        // }
        // f();

    }
    $('.requirements-form__form').validate();




    window.onscroll = changeMenuPos;
}));
