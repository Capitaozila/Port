$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  new Typed(".typing", {
    strings: [
      "Desenvolvedor Flutter",
      "Desenvolvedor Python",
      "Web developer",
      "Desenvolvedor React",
    ],
    typeSpeed: 20,
    backSpeed: 10,
    loop: true,
  });
//   new Typed(".typing-2", {
//     strings: ["Flutter", "Front-end", "de jogos"],
//     typeSpeed: 20,
//     backSpeed: 10,
//     loop: true,
//   });
});
