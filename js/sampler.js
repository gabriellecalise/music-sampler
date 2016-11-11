$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#romulusTitle').hide();
    $('#jacksonvilleTitle').hide();
    $('#mistressWitchTitle').hide();
    $('#shouldHaveTitle').hide();
  }
      hideAll();

    // when any of the album art icons are clicked,  the suitable div will appear
    $('.albumArt').click(function() {
      hideAll();
      // SWITCH STATEMENT
      switch ($(this).attr("id")) {
        case "michigan":
          $('#romulusTitle').show();
          break;
        case "illinois":
          $('#jacksonvilleTitle').show();
          break;
        case "avalanche":
          $('#mistressWitchTitle').show();
          break;
        case "carrieAndLowell":
          $('#shouldHaveTitle').show();
          break;
      }

          $("audio").each(function() {
            this.pause();
            this.currentTime=0;
          });
    });


    $('#sufText').hide();
    $('#sufPic').click(function() {
    $('#sufText').slideToggle();
    });


  });
