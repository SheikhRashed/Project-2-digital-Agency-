$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
		type: 'iframe'
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
        spaceBetween: 16,
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
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