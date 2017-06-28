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
});
