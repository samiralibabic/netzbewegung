$(document).ready(function() {

    /* Navigation smooth scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 0)
            }, 1000);
            return false;
          }
        }
      });
    });

    /* fix menu to top on scroll */
    $(window).scroll(function() {
        if ($('body').scrollTop() >= $('#landing-page').outerHeight()) {
            $('#menu').addClass('fixed');
            $('#text1').css('padding-top', '100px');
        } else {
            $('#menu').removeClass('fixed');
            $('#text1').css('padding-top', '5%');
        }
    });

    /* animate first image */
    var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animation = 'animated fadeIn';
    $('#img1').waypoint(function() {
        $('#img1').css('visibility', 'visible');
        $('#img1').addClass(animation);
    }, {offset: '50%'});

    /* footer button clicks */
    $('#footer button').click(function() {
        var val = $(this).html();
        if ($(this).html() == '+') {
            $(this).html("✕");
        } else { $(this).html('+'); }
    });

    /* image-slider */
    $('#sliding-images').slick({
        appendArrows: $('#prev-next'),
        prevArrow: '<button type="button" class="btn btn-default" id="slide-left"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>',
        nextArrow: '<button type="button" class="btn btn-default" id="slide-right"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>',
        variableWidth: true,
        centerMode: true
    });

  });
