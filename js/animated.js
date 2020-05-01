$(document).ready(function() {
    $('.btn--animated').click(function() {
        $('.header-top__search').fadeToggle(1),
            $('.btn--login').fadeToggle(1),
            $('#slide-bar').fadeToggle(1),
            // $('.header-top__search').toggle(),
            //     $('.btn--login').toggle(),
            //     $('#slide-bar').toggle(),
            // $('.header-top__search').fadeToggle(),
            //     $('.btn--login').fadeToggle(),
            //     $('#slide-bar').fadeToggle(),

            $('.main-data').toggleClass('move-data');
    });
});

// $(document).ready(function() {
//     $('.btn--animated').click(function() {
//             // $('.header-top__search').toggleClass('hide--show'),
//             //     $('.btn--login').toggleClass('move__search'),
//             //     $('#slide-bar').toggleClass('move-slide__bar'),
//             // $('.header-top__search').toggle(),
//             //     $('.btn--login').toggle(),
//             //     $('#slide-bar').toggle(),
//             $('.header-top__search').hide(),
//                 $('.btn--login').hide(),
//                 $('#slide-bar').hide(),
//                 $('.main-data').addClass('move-data');
//         },
//         function() {
//             $('.header-top__search').show(),
//                 $('.btn--login').show(),
//                 $('#slide-bar').show(),
//                 $('.main-data').removeClass('move-data');
//         });
// });

// function hideFunction() {
//     $('.header-top__search').hide(),
//         $('.btn--login').hide(),
//         $('#slide-bar').hide(),
//         $('.main-data').addClass('move-data');
// }

// function showFunction() {
//     $('.header-top__search').show(),
//         $('.btn--login').show(),
//         $('#slide-bar').show(),
//         $('.main-data').removeClass('move-data');
// }

// $(document).ready(function() {
//     $('.btn--animated').toggle(hideFunction(), showFunction());
// });

// $(document).ready(function() {
//     $('.btn--animated').toggle(function() {
//         $('.header-top__search').slideDown(),
//             $('#slide-bar').slideDown(),
//             $('.btn--login').slideDown()
//     }, function() {

//     });
// });

var width = 575;

function screenWindow() {
    if (window.innerWidth < width) {
        $('.header-top__search').hide(),
            $('.btn--login').hide(),
            $('.nav').hide()
    } else {
        $('.header-top__search').show(),
            $('.btn--login').show(),
            $('.nav').show()
    }
}



$(window).on("resize", screenWindow);

function loadWindow() {
    if (window.innerWidth < width) {
        $('.header-top__search').hide(1),
            $('.btn--login').hide(1),
            $('.nav').hide(1)
    }
};
$(window).on("load", loadWindow);