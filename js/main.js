$(document).ready(function(){

    // Menu display on MouseHover
    $('.navbar-toggle').hover(function() {
        $('.navbar-nav').toggleClass('hidden');
    });

    // Popup Modal

    $('#btnPopUp').click(function(event) {
        event.preventDefault();

        // display PopUp modal

        var animatedModal = $('#animatedModal');

        if (animatedModal.hasClass( "zoomOut" )) {

            animatedModal.removeClass('zoomOut').addClass('zoomIn').show();

        } else {
            animatedModal.show();
        }

        $('#closebt').click(function() {

            animatedModal.addClass( "zoomOut" ).promise().done(function() {
                animatedModal.hide();
            });
        });
    });

    // Scroll-top
    /*$(window).scroll(function() {

     if ($(this).scrollTop() > 250 ) {
     $('a#scroll-top').fadeIn();
     } else {
     $('a#scroll-top').fadeOut();
     }
     });

     $('a#scroll-top').click(function(e) {
     e.preventDefault();
     $("html, body").animate({ scrollTop: 0 }, 600);

     return false;
     });*/
});