$(document).ready(function($) {
    
    $(window).on("scroll",
        function() {
            var c = jQuery(window).scrollTop();
            c > 0 ? $(".bdr_header").addClass("bdr_fixed") : $(".bdr_header").removeClass("bdr_fixed");
    });

    $(function($) {
        var $scroll_btm = $('html, body');
        $('a.scroll_link').click(function() {
            $scroll_btm.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            },
            800);
            return false;
        });
    });

    $(function($) {
        bdrate = new WOW({
            animateClass: 'animated',
            offset: 100
        });
        bdrate.init();
    });

    $('.bdrinstro').flexslider({
        animation: "slide",
        directionNav: false,
        touch: true
    });

    $('.fealide').flexslider({
        slideshow: false,
        directionNav: false,
        touch: true
    });

    $('.shoplide').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
        touch: true
    });

    $('.bdr_menu').onePageNav({
        scrollSpeed: 800,
        scrollThreshold: 0.5
    });

    $(".bdr_icon_menu").click(function() {
        $(".bdr_header").addClass("active");
    });

    $(".bdr_icon_menu_x").click(function() {
        $(".bdr_header").removeClass("active");
    });

    $('#bdr_home').parallax("50%", 0.5);

    $('.viper_pic').parallax("50%", 0.6);
});
