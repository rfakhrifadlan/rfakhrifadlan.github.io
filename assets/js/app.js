const body = document.querySelector('body');
const barmenu = document.querySelector('.barmenu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
AOS.init();
if (window.innerWidth > 1000) {
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if (scroll_top < 1) {
                $('.smart-scroll').removeClass('scrolled-up');
                $('.nav-links').find('li a').css('color', '#ffffff');
            } else if (scroll_top > last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                $('.nav-links').find('li a').css('color', '#0053be');

            } else {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            last_scroll_top = scroll_top;
        });
    }
}
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.cssText = "background-color:#fff;";
//         document.getElementsByClassName("nav-link").style.cssText = "color:#0053be;";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         document.getElementById("navbar").style.cssText = "background-color:transparent;";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (currentScrollPos == 0) {
//         $('.nav-links>li>a').css('color', '#000')
//     } else {
//         if (prevScrollpos > currentScrollPos) {
//             $('#navbar').addClass('scroll-nav');
//         } else {
//             $("#navbar").css('top', '-70px');
//         }
//     }

//     prevScrollpos = currentScrollPos;
// }

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