$(document).ready(function () {
    $(".popup-youtube").magnificPopup({
        type: "iframe",
    });
});

function mobileMenu() {
    console.log("clicked");
    const mobileMenu = document.querySelector(".navbar__menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

AOS.init({
       
      });

 new Swiper(".mySwiper", {
        loop:true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });