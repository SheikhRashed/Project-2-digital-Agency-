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



 new Swiper(".mySwiper", {
        loop:true,
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
        },
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });