const body = document.querySelector('body');
const barmenu = document.querySelector('.barmenu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
AOS.init();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos == 0) {
            $('.nav-links>li>a').css('color', '#000')
        } else {
            if (prevScrollpos > currentScrollPos) {
                $('#navbar').addClass('scroll-nav');
            } else {
                $("#navbar").css('top', '-70px');
            }
        }

        prevScrollpos = currentScrollPos;
    }
    // $(windows).scroll(function() {
    //     $('navbar').toggleClass('scroll-nav', $(this).scrollTop() > 50)
    // });

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

    $(this).on('mouseover', '.pick-side', function() {
        var leftTag = $(this).hasClass('pleft');
        var midTag = $(this).hasClass('pmid');
        var rightTag = $(this).hasClass('pright');

        $('.main-pick').removeClass('main-pick').addClass('pick-side')
        $(this).removeClass('pick-side').addClass('main-pick')

        if (leftTag) {
            $('.active-desc').hide()
            $('.desc-timeline').removeClass('active-desc');
            $('.time-2014').removeClass('aos-animate');
            setTimeout(function() {
                $('.time-2014').addClass('aos-animate');
            }, 50);
            $('.time-2014').addClass('active-desc').show()
        } else if (midTag) {
            $('.active-desc').hide()
            $('.desc-timeline').removeClass('active-desc');
            $('.time-2017').removeClass('aos-animate');
            setTimeout(function() {
                $('.time-2017').addClass('aos-animate');
            }, 50);
            $('.time-2017').addClass('active-desc').show()
        } else {
            $('.active-desc').hide()
            $('.desc-timeline').removeClass('active-desc');
            $('.time-2021').removeClass('aos-animate');
            setTimeout(function() {
                $('.time-2021').addClass('aos-animate');
            }, 50);
            $('.time-2021').addClass('active-desc').show()
        }
    })

    // var iconButton = $("#dot2");
});