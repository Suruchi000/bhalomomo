var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: "true",
  });

  var nav= document.querySelector(".respo-nav");
  var cross = document.querySelector(".fa-xmark");
  var menu = document.querySelector(".fa-bars");

  menu.addEventListener("click" , function(){
    nav.style.top = "0%";
  })

  cross.addEventListener("click" , function(){
    nav.style.top = "-100%";
  })

  confirm("Would you like to receive notifications on latest updates?");