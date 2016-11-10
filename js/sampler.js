$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('.romulus').hide();
    $('.jacksonville').hide();
    $('.mistressWitch').hide();
    $('.shouldHave').hide();
  }

      hideAll();

    // when any of the album art icons are clicked,  the suitable div will appear
    $('.albumArt').click(function() {

      hideAll();

      // SWITCH STATEMENT
      switch ($(this).attr("class")) {
        case "Romulus":
          $('.michigan').show();
          break;
        case "Illinois":
          $('.jacksonville').show();
          break;
        case "Avalanche":
          $('.mistressWitch').show();
          break;
        case "CarrieAndLowell":
          $('.shouldHave').show();
          break;
      }
    });


  });
