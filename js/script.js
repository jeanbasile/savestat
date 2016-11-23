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



    // ----------------------------- bouton haut de page ------------------------



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


// --------------------------------- Boutons Map ---------------------

var tabBtns = $('.my-tab-btn');
var tabs = $('.my-tab');
tabs.hide();


tabBtns.on('click', function(evt) {
  evt.preventDefault();
  var idx = tabBtns.index(this);
  var i = $(this).find('i');
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
     $('.my-tab.active').removeClass('active').slideUp();
     i.removeClass('fa-caret-up').addClass('fa-caret-down');
  } else {
    var self =  $(this), $cols = $('.my-tab-btn.active');
    if ($cols.length) {
      $('.my-tab-btn.active').find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
      $('.my-tab-btn.active').removeClass('active');

      $('.my-tab.active').removeClass('active').slideUp(function(){
       self.addClass('active');

        tabs.eq(idx).addClass('active').slideDown();
        i.addClass('fa-caret-up').removeClass('fa-caret-down');
      });
    } else {
      $(this).addClass('active');
       tabs.eq(idx).addClass('active').slideDown();
        i.addClass('fa-caret-up').removeClass('fa-caret-down');
    }
  }

});

// ------------------------------------- MAP -----------------------------------------


var continents = $('.js-map');

continents.on('mouseover', function() {
  var target = $("#" + $(this).data("target"));
  target.find('h2').toggleClass('highlight');
});

continents.on('mouseleave', function() {
  var target = $("#" + $(this).data("target"));
  target.find('h2').removeClass('highlight');
});

continents.on('click', function() {
  var target = $("#" + $(this).data("target"));
  target.find('a').click();
});






});
