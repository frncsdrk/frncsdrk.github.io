$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /**
     * scroll to top
     * CRITICAL: needs element with ".scrollup" class
     * src: http://jsfiddle.net/neeklamy/RpPEe/
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) { // minimum scroll down reached
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').hide()
    .click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
