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
        easing: 'ease-in-out-sine'
});
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});