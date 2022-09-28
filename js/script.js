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
});