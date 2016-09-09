$(document).ready(function() {

    /* Navigation smooth scroll */
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
    });

    /* footer button clicks */
    $('#footer button').click(function() {
        var val = $(this).html();
        if ($(this).html() == '+') {
            $(this).html("x");
        } else { $(this).html('+'); }
    });

    /* slider */
    $('#sliding-images').slick({
        appendArrows: $('#prev-next'),
        prevArrow: '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>',
        nextArrow: '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>'
    });

  });
