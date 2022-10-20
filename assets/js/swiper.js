var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
});
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

let swiper2 = new Swiper('.lower-content.swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
  reverseDirection: true,
  changeDirection: false,
});

let swiper3 = new Swiper('.tab.top-content.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
});

let swiper4 = new Swiper('.tab.lower-content.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
  reverseDirection: true,
  changeDirection: false,
});
