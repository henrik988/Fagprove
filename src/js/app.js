$(function () {
    // Initialize Particles JS Hero 1
    particlesJS.load('particles', 'src/js/lib/cfg/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-quotes', 'src/js/lib/cfg/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    // Config and initialize Early-bird countdown
    $('.countdown-text').countdown({
        date: "October 28, 2015 23:59:59"
    });

    // Hamburger-menu animation toggle
    $('#hamburger-menu').click(function () {
        $(this).toggleClass('open');
        $(".main-menu").toggleClass("toggled");
    });

});