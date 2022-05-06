import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initPreparingSlider} from './modules/init-preparing-slider';
import {initHorizontalScroll} from './modules/init-horizontal-scroll';
import {openHeaderMenu} from './modules/open-header-menu';
import {initNavigationChanger} from './modules/init-navigation-changer';
import {headerAddBg} from './modules/header-add-bg';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initPreparingSlider();
    initHorizontalScroll();
    openHeaderMenu();
    initNavigationChanger();
    headerAddBg();
  });
});
