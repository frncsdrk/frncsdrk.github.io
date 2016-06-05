// panorama-collapsible
$(function() {
    $('.pano > .pano-item > p').hide();
    $('.pano > .pano-item').addClass('pano-inactive');
    $('.pano > .pano-active').removeClass('pano-inactive').find('p').show();
    $('.pano > .pano-item').click(function(ev) {
        // prevent on already active element
        if ($(this).hasClass('pano-active')) {
            return false;
        }
        // pano active / inactive
        $('.pano > .pano-item').addClass('pano-inactive');
        $('.pano > .pano-active').removeClass('pano-active');
        $(this).removeClass('pano-inactive').addClass('pano-active');
        // before / after
        $('.pano > .pano-item').removeClass('pano-before pano-after');
        $(this).prevAll('.pano-item').addClass('pano-before');
        $(this).nextAll('.pano-item').addClass('pano-after');
        // show body
        $('.pano > .pano-item').find('p').slideUp();
        $(this).find('p').slideDown();
    });
});
