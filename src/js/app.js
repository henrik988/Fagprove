



var heroOverlay = $('.hero-overlay').height();
$('.particles-js-canvas-el').attr('style', 'height:' + heroOverlay + ' !important');
//$('.particles-js-canvas-el').css('height', heroOverlay, 'important');
loadPartoclesJs()


function loadPartoclesJs() {
    particlesJS.load('particles', 'src/js/lib/cfg/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
};