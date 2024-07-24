let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle--closed')) {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navToggle.classList.remove('main-header__toggle--opened');
    navToggle.classList.add('main-header__toggle--closed');
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  }
});
