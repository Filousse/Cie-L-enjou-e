// test git

$(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
              // $("#logoSection").addClass("fadeOut");
              $("#header").addClass("fadeIn");
            }
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50 ) {
                $("#cieSection").addClass("fadeIn");
                $(".Wiggle").addClass("wiggle");
              }
          });
          $(window).scroll(function () {
              if ($(this).scrollTop() > 620) {
                  $("#distributionSection").addClass("zoomer");
                } else {
                  $("#distributionSection").addClass("fadeIn").removeClass();
                }
            });

            $(window).scroll(function () {
                if ($(this).scrollTop() > 2000) {
                    $("#creationSection").addClass("slideRight");
                  } else {
                    $("#creationSection").addClass("fadeIn").removeClass();
                  }
              });
              $(window).scroll(function () {
                  if ($(this).scrollTop() > 3300) {
                      $("#perso1").addClass("slideRight");
                      $("#perso2").addClass("slideLeft");
                    }
              });







      // $('#animatedElement').click(function() {
      //   $(this).addClass("barrelRoll");
      // });
});
