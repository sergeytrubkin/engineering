const slider = document.querySelector('.preparing__slider');

const initPreparingSlider = () => {
  if (!slider) {
    return;
  }
  const swiperEl = slider.querySelector('.swiper');


  // eslint-disable-next-line
  const swiper = new Swiper(swiperEl, {
    loop: true,
    speed: 1000,
    allowTouchMove: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'preparing__bullet',
      bulletActiveClass: 'preparing__bullet-active',
    },
  });
};

export {initPreparingSlider};
