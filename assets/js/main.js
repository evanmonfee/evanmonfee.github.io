window.onscroll = function () { stickNav() };

var navbar = $('.sticky-navbar');
var sticky = $('.sticky-navbar').offset().top;

function stickNav() {
    if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky");
    }
}