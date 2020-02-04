/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function () {

    // H E A D E R //

    $('.headerForm').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 10
    });

    $('.mik-all').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 10
    });

    $('.topList').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $('.heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $('.describeList').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    // D A N G E R//

    $('.danger__heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.danger__text').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.danger__list').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 50
    });

    $('.danger__stat').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInUp',
        offset: 50
    });

    // E F F E C T //

    $('.effect__heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.effectCard:nth-child(1)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 30
    });

    $('.effectCard:nth-child(2)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.effectCard:nth-child(3)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 30
    });

    $('.effect__conclusion').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInUp',
        offset: 50
    });

    // B E N E F I T//

    $('.benefits__heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.benefits__desc').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.benefitsCard:nth-child(1)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 30
    });

    $('.benefitsCard:nth-child(2)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.benefitsCard:nth-child(3)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 30
    });

    // $('.benefits__question').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated fadeIn',
    //     offset: 50
    // });

    // A P P L Y//

    $('.apply__heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 30
    });

    $('.apply__image').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 30
    });

    $('.apply__list').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 30
    });
}));