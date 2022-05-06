import {ServicesController} from '../utils/services-controller';

const services = document.querySelector('.services');

const initHorizontalScroll = () => {
  if (!services) {
    return;
  }

  const servicesScroll = new ServicesController();
  servicesScroll.init();
};

export {initHorizontalScroll};
