// Set height #mainSlide
jQuery(document).ready(function($) {
    var Height = $('.slidesImg').height();
    $('#mainSlide').css({
        'height': Height
    });
    $(window).resize(function() {
        var Height = $('.slidesImg').height();
        $('#mainSlide').css({
            'height': Height
        });
    });
});
// JavaScript Document
(function($) {

    //top slider

    $('.imgMain').flexslider({
        animation: 'fade',
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 7000,
        animationSpeed: 3000,
        animationLoop: true,
        slideshow: true
    });

})(jQuery);
