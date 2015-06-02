$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#sun').css({ transform: 'rotate(' + theta + 'rad)' });
});

(function($) {
        $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
    }(jQuery));
        
var radio = document.getElementById("radio"); 
function playRadio() { 
    if (radio.paused) 
        radio.play(); 
    else 
        radio.pause(); 
} 
        
var guitar = document.getElementById("guitar"); 
function playGuitar() { 
    if (guitar.paused) 
        guitar.play(); 
    else 
        guitar.pause(); 
} 

//$('#sketch1').hover(function toggleControls() {
//    if (this.hasAttribute("controls")) {
//        this.removeAttribute("controls")
//    } else {
//        this.setAttribute("controls", "controls")
//    }
//})
//$('#sketch2').hover(function toggleControls() {
//    if (this.hasAttribute("controls")) {
//        this.removeAttribute("controls")
//    } else {
//        this.setAttribute("controls", "controls")
//    }
//})
//$('#sketch3').hover(function toggleControls() {
//    if (this.hasAttribute("controls")) {
//        this.removeAttribute("controls")
//    } else {
//        this.setAttribute("controls", "controls")
//    }
//})
//$('#sketch4').hover(function toggleControls() {
//    if (this.hasAttribute("controls")) {
//        this.removeAttribute("controls")
//    } else {
//        this.setAttribute("controls", "controls")
//    }
//})