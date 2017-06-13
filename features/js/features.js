jQuery(document).ready(function($) {
    // autoHeight div
    $('.contentLi .item').removeAttr('style');
    $('.contentLi .item').autoHeight({ column: 4, clear: 1 });
});
