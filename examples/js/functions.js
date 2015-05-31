$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#sun').css({ transform: 'rotate(' + theta + 'rad)' });
});

$("#nav-two a")
  .each(function(i) {
    if (i != 0) {
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");