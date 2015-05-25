$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#sun').css({ transform: 'rotate(' + theta + 'rad)' });
});