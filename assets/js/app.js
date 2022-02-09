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
