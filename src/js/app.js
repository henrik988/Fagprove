

$(function () {
    // Initialize Particles JS
    particlesJS.load('particles', 'src/js/lib/cfg/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    // Config and initialize Early-bird countdown
    $('.countdown-text').countdown({
        date: "October 28, 2015 23:59:59"
    });

});