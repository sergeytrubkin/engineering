const header = document.querySelector('.header');
const offset = 100;

const onWindowScroll = () => {

  if (window.pageYOffset > offset) {
    header.classList.add('bg');
  } else {
    header.classList.remove('bg');
  }
};

const headerAddBg = () => {
  if (!header) {
    return;
  }

  window.addEventListener('scroll', onWindowScroll);
};

export {headerAddBg};
