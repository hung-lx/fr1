//scroll up
(function($) {
    $.scrollUp();
})(jQuery);


//user agent
var osVer;
osVer = "Android";

/*
以下の文字列でユーザーエージェントを判別します
osVer = "iPhone";
osVer = "Android";
osVer = "iPod";
osVer = "iPad";
*/
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('body').addClass('ios');
}
if (navigator.userAgent.indexOf(osVer) > 0) {
    $('body').addClass('android');
}

var _ua = (function(u) {
    return {
        Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
        Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
    }
})(window.navigator.userAgent.toLowerCase());



function isPhone() {
    return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0);

}

// タップ電話自動リンク
$(function() {
    if (!isPhone())
        return;

    $('a[data-action=call]').each(function() {
        var $ele = $(this);
        $ele.attr("href", "tel:0438-36-1071");
    });
});





//スティッキーヘッダー
var $window = $(window), //ウィンドウを指定
    $content = $(".gNaviWrap"), //#content部分
    $chenge = $("#change"), //#change部分
    topContent = $content.offset().top; //#contentの位置を取得
var elH11 = $('.slidesImg').height();

var sticky = false;

$window.on("scroll", function() {
    if ($window.scrollTop() > elH11) {　 //scroll位置が#contentの上にある場合
        if (sticky === false) {
            $chenge.slideDown();　 //#change部分が上がる。
            sticky = true;
        }
    } else {
        if (sticky === true) {　 //scroll位置が下にある場合
            $chenge.slideUp(); //#change部分が降りてくる。
            sticky = false;
        }
    }
});
$window.trigger("scroll");


// スマホメニュー global navigation
function menuSlide(b, t) {
    var btn_menu = b,
        menu = $(btn_menu),
        speedOpen = 400,
        speedClose = 600,
        speedItem = 300,
        speedDelayOpen = 300,
        speedDelayClose = 100,
        open = 'menu_open',
        close = 'current',
        openPosition = 0,
        closePosition = 0,
        targetId = t,
        target = $(targetId),
        menuItem = target.find('li');


    menu.on('click', function() {

        if (!menu.hasClass(close)) {
            target.stop().fadeIn(speedOpen);
            menu.removeClass(open).addClass(close);
            for (var i = 1; i <= menuItem.length; i++) {
                menuItem.eq(i - 1).stop().animate({
                    'right': openPosition
                }, speedItem);
            }
        } else {
            for (var i = 1; i <= menuItem.length; i++) {
                //console.log(-(i - 1));
                menuItem.eq(-i).stop().animate({
                    'right': closePosition
                }, speedItem);
            }
            target.stop().fadeOut(speedClose);
            menu.removeClass(close).addClass(open);
        }
    });
}
menuSlide('.js_btn_gnavi', '#gNaviWrapSP', '#gNavi');



// gNaviWrapSP rotate
jQuery(document).ready(function($) {

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {
        if (screen.width > 640) {
            $("#gNaviWrapSP").css('display', 'none');
        } else {
            $(".js_btn_gnavi").removeClass('current');
        }
    }, false);


    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $(window).on("orientationchange", function() {

            if (Modernizr.mq('(min-width: 641px)')) {
                $("#gNaviWrapSP").css('display', 'none');
            } else {
                $(".js_btn_gnavi").removeClass('current');
            }

        });
    }

});
