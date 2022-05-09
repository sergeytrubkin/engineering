const mainNav = document.querySelector('.main-nav');
const breakpoint = window.matchMedia('(max-width:767px)');
let mobileWidth = false;

const openMenu = () => {
  mainNav.classList.add('is-active');
  if (mobileWidth) {
    window.scrollLock.disableScrolling();
  }
};

const closeMenu = () => {
  mainNav.classList.remove('is-active');
  if (mobileWidth) {
    window.scrollLock.enableScrolling();
  }
};

const onClickBurger = (evt) => {
  const parent = evt.target.closest('.main-nav');

  if (parent.classList.contains('is-active')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onClickLink = (evt) => {
  if (evt.target.closest('.main-nav__link')) {
    closeMenu();
  }
};

const onClickEsc = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && mainNav.classList.contains('is-active')) {
    evt.preventDefault();
    closeMenu();
  }
};


const breakpointChecker = () => {
  if (breakpoint.matches) {
    mobileWidth = true;

    if (mainNav.classList.contains('is-active')) {
      window.scrollLock.disableScrolling();
    }
  } else {
    mobileWidth = false;
    window.scrollLock.enableScrolling();
  }
};

const openHeaderMenu = () => {
  if (!mainNav) {
    return;
  }

  const burger = mainNav.querySelector('.main-nav__toggle');

  burger.addEventListener('click', onClickBurger);
  document.addEventListener('click', onClickLink);
  document.addEventListener('keydown', onClickEsc);

  breakpointChecker();
  breakpoint.addListener(breakpointChecker);
};

export {openHeaderMenu};
