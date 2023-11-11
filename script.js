var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    600:{
      slidesPerView:2,
    },
    900:{
      slidesPerView:3,
    },
  }
});

const arrowButton = document.getElementById('float');

window.onscroll=function() {myFunction()};

function myFunction(){
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    document.getElementById("float").classList.add("hide-btn");
    arrowButton.classList.remove('hide-btn')
} else {
    document.getElementById("float").classList.remove("hide-btn");
    arrowButton.classList.add('hide-btn');
}
};