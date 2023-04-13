import {iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
  });
});

// .is-active || .is-open || .is-invalid
// .select.select--opened ❌ ---> [data-select].is-open ✅

// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// .closest(el)
