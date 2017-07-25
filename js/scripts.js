var imagesrc = 2;
var timeAmount = 5000;

$(document).ready(function() {
  $(".toggleButton").click(function() {
    if ($(".second__content").hasClass("showing") === true) {
      $(".second__content").removeClass("showing");
    } else {
      $(".second__content").addClass("showing");
    }
  });
  $(".main__content").click(function() {
    if ($(".second__content").hasClass("showing") === true) {
      $(".second__content").removeClass("showing");
    }
  });
  $("#menuToggle").click(function() {
    if ($("#navBar").hasClass("showItems") === true) {
      $("#navBar").removeClass("showItems");
    } else {
      $("#navBar").addClass("showItems");
    }
  });

  function slideshow(i) {
    setTimeout(function(){
      $("#slideShow img").attr("src","images/slideshow/" + imagesrc + ".jpg");
      if (imagesrc < 6) {
        imagesrc++;
      } else if (imagesrc >= 6) {
        imagesrc = 1;
      }
      slideshow(imagesrc);
    }, timeAmount);
  };

  slideshow(imagesrc);
});
