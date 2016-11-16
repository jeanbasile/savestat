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


    // -----------------------------boutons Lire la suite-------------------------
    //
    // $(".more").hide();
    // jQuery('.button-read-more').click(function() {
    //     $(this).closest('.less').addClass('active');
    //     $(this).closest(".less").prev().stop(true).slideDown("1000");
    // });
    // jQuery('.button-read-less').click(function() {
    //     $(this).closest('.less').removeClass('active');
    //     $(this).closest(".less").prev().stop(true).slideUp("1000");
    // });

    // ------------------------ menus déroulants conservation---------------

  //   jQuery('.button-conservation-more').click(function () {
	//  // one at a time
	//  $('.more').hide();
	//  $('.less').removeClass('active');
  //  });
   //
  //   jQuery('.button-conservation-more').click(function() {
  //       $(this).closest('.less').addClass('active');
  //       $(this).closest(".less").next().stop(true).slideDown("1000");
  //   });
  //   jQuery('.button-conservation-less').click(function() {
  //       $(this).closest('.less').removeClass('active');
  //       $(this).closest(".less").next().stop(true).slideUp("1000");
  //
  //   });

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
  // tabs.fadeOut();
  // tabs.eq(tabBtns.index(this)).fadeIn();

});

// ------------------------------------- MAP -----------------------------------------


var continents = $('.js-map');

continents.on('mouseover', function() {
  var target = $("#" + $(this).attr("data-target"));
  console.log(target.find('h2'));
  target.find('h2').addClass('highlight');



});
continents.on('mouseleave', function() {
  var target = $("#" + $(this).attr("data-target"));
  console.log(target.find('h2'));
  target.find('h2').removeClass('highlight');



});

// var map = $(".map");
//
// map.on('click', function(evt){
//     evt.preventDefault();
//     if ($this)
//
// });





//$('.carousel').carousel();



});
