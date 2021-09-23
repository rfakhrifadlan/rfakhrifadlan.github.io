const body = document.querySelector('body');
const barmenu = document.querySelector('.barmenu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
AOS.init();
barmenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('open');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

$(document).ready(function() {
    $(this).on('click', '#dot', function() {
        $('#dot2').removeClass('dot-active');
        $(this).addClass('dot-active');
        $('.desc').removeClass('aos-animate');
        setTimeout(function() {
            $('.desc').addClass('aos-animate');
        }, 100);
        $('.desc2').hide();
        $('.desc').show();
    });
    $(this).on('click', '#dot2', function() {
        $('#dot').removeClass('dot-active');
        $('.desc2').removeClass('aos-animate');
        setTimeout(function() {
            $('.desc2').addClass('aos-animate');
        }, 100);
        $('.desc').hide();
        $('.desc2').show();
        $(this).addClass('dot-active');

    });

    // var iconButton = $("#dot2");
});