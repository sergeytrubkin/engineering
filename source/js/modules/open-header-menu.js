const mainNav = document.querySelector('.main-nav');

const openMenu = () => {
  mainNav.classList.add('is-active');
};

const closeMenu = () => {
  mainNav.classList.remove('is-active');
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

const openHeaderMenu = () => {
  if (!mainNav) {
    return;
  }

  const burger = mainNav.querySelector('.main-nav__toggle');

  burger.addEventListener('click', onClickBurger);
  document.addEventListener('click', onClickLink);
};

export {openHeaderMenu};
