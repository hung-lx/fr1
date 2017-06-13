jQuery(document).ready(function($) {

    //Accdion SP
    //$(".Titl").unbind("click");
    if (Modernizr.mq('(min-width: 641px)')) {
        $(".Titl").unbind("click");

    } else {
        $(".Titl").bind("click", function() {
            if ($(this).hasClass('show')) {
                $(this).parent().find('.CtAccdionSp').slideUp();
                $(this).removeClass('show');
            } else {
                $(this).parent().find('.CtAccdionSp').slideDown();
                $(this).addClass('show');
            }

        });
    }
    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {
        if (screen.width > 640) {
            $(".Titl").unbind("click");

        } else {
            $(".Titl").bind("click", function() {
                if ($(this).hasClass('show')) {
                    $(this).parent().find('.CtAccdionSp').slideUp();
                    $(this).removeClass('show');
                } else {
                    $(this).parent().find('.CtAccdionSp').slideDown();
                    $(this).addClass('show');
                }

            });
        }
    }, false);


    //IPHONE
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $(window).on("orientationchange", function() {

            if (Modernizr.mq('(min-width: 641px)')) {
                $(".Titl").unbind("click");

            } else {
                $(".Titl").bind("click", function() {
                    if ($(this).hasClass('show')) {
                        $(this).parent().find('.CtAccdionSp').slideUp();
                        $(this).removeClass('show');
                    } else {
                        $(this).parent().find('.CtAccdionSp').slideDown();
                        $(this).addClass('show');
                    }

                });
            }
        });
    }


    // scroll to div PC
    $(document).on('click', 'a[href^="#"]', function(e) {

        var id = $(this).attr('href');

        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        e.preventDefault();

        var pos = $(id).offset().top - 200;

        $('body, html').animate({ scrollTop: pos });
    });

});
