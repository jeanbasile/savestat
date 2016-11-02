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

        });

    });



    // bouton haut de page



    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            // Si un défillement de 100 pixels ou plus.
            // Ajoute le bouton
            jQuery('.scroll_button').fadeIn(duration);
        } else {
            // Sinon enlève le bouton
            jQuery('.scroll_button').fadeOut(duration);
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


// Lire la suite

    $(".more").hide();
        jQuery('.button-read-more').click(function () {
            $(this).closest('.less').addClass('active');
            $(this).closest(".less").prev().stop(true).slideDown("1000");
        });
        jQuery('.button-read-less').click(function () {
            $(this).closest('.less').removeClass('active');
            $(this).closest(".less").prev().stop(true).slideUp("1000");
        });
});
