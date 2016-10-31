// Menu mobile
$(document).ready(function() {
    $(function() {
        var topMenu = $("#top_menu");
        $("#show-menu").on('click', function(evt) {
            evt.preventDefault();

            topMenu.toggleClass('open');

        });
        $("#close-menu").on('click', function(evt) {
            evt.preventDefault();

            topMenu.removeClass('open');

        })

    })

    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            // Si un défillement de 100 pixels ou plus.
            // Ajoute le bouton
            jQuery('.cRetour').fadeIn(duration);
        } else {
            // Sinon enlève le bouton
            jQuery('.cRetour').fadeOut(duration);
        }
    });

    jQuery('#up').click(function(event) {
        // Un clic provoque le retour en haut animé.
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });


    $('.js-parallax').parallax();
    $('.bxslider').bxSlider();

})
