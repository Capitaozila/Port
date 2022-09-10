$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop: 0});
    });
    new Typed(".typing", {
        strings: ["Designer", "Programador", "Game Maker"], typeSpeed: 80, backSpeed: 30, loop: false
    });
    new Typed(".typing-2", {
        strings: ["Junior", "Front-end", "de jogos"], typeSpeed: 80, backSpeed: 30, loop: false
    });
    $('.carousel').owlCarousel({
        margin: 20, loop: true, autoplayTimeOut: 2000, autoplayHoverPauser: true, responsive: {
            0: {
                items: 1, nav: false
            }, 600: {
                items: 2, nav: false
            }, 1000: {
                items: 3, nav: false
            }
        }
    });
});