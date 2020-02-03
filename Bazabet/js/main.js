/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

// function parallax(event) {
//     this.querySelectorAll('.layer').forEach(layer => {
//         let speed = layer.getAttribute('data-speed');
//         layer.style.transform = 'translateX(${event.clientX*speed}px)'
//     });
// }
// document.addEventListener('mousemove', parallax);

$(document).ready((function () {

    $('.getBonus__images').addClass('start-animation');


    if (jQuery(window).width() > 1199) {
        $(window).on('mousemove resize', (function (e) {
            var w = $(window).width();
            var h = $(window).height();
            var offsetX = 0.5 - e.pageX / w;
            $(".parallax").each((function (i, el) {
                var offset = parseInt($(el).data('offset'));
                var translate = "translateX(" + Math.round(offsetX * offset) + "px";
                $(el).css({
                    'transform': translate
                });
            }));
        }));
    }
}));