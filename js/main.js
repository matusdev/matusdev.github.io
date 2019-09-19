/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function() {

    $('.navbar-toggler').click((function(){
        $(this).toggleClass('open');
    }));

    function changeMenuPos() {
        var element = document.querySelector("#header");
        var desiredPosition = 10;
        if (window.pageYOffset >= desiredPosition) {
            element.className = 'header header--fixed';
        } else {
            element.className = 'header';
        }
    }

    $('a[href^="#"]').click((function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    }));

    // $(function() {
    //     $(window).scroll(function() {
    //         if($(this).scrollTop() != 0) {
    //             $('#toTop').fadeIn();
    //         } else {
    //             $('#toTop').fadeOut();
    //         }
    //     });
    //
    //     $('#toTop').click(function() {
    //         $('body,html').animate({scrollTop:0},800);
    //     });
    // });

    // $('.portfolio__button').on('click', function (){
    //   const btn = $(this);
    //   const loader = btn.find('span');
    //   $.ajax({
    //     url:'data.html',
    //     type: 'GET',
    //     beforeSend: function (response) {
    //         btn.attr('disabled', true);
    //         loader.addClass('.d-inline-block');
    //     },
    //     success: function(){
    //         setTimeout(function(){
    //             loader.removeClass('.d-inline-block');
    //             btn.attr('disabled', false)
    //         },1000)
    //     },
    //     error: function () {
    //         btn.attr('disabled', false);
    //     }
    //   });
    // });

    window.onscroll = changeMenuPos;
}));


