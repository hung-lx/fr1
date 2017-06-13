jQuery(document).ready(function($) {
    $('.tiTle02').click(function(event) {
        //show content
        if ($(this).hasClass('hide')) {
            $(this).parent().parent().parent().find('.contentMain').slideDown();
            $(this).removeClass('hide');
        }
    });
});
