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
    new Typed(".typing", {
        strings: ["Designer", "Programador", "Game Maker", "Web developer"], typeSpeed: 80, backSpeed: 30, loop: true
    });
    new Typed(".typing-2", {
        strings: ["iniciante", "Front-end", "de jogos"], typeSpeed: 80, backSpeed: 30, loop: true
    });
});