window.onscroll = () => {
  const header = document.querySelector('.header');
  const box = document.querySelector('.header__box');
  const logo = document.querySelector('.header__logo-img');

  if (window.pageYOffset > 0) {
    header.classList.add('header_scroll');
    box.classList.add('header__box_scroll');
    logo.src = 'img/logotype-dark.svg';
  } else { 
    header.classList.remove('header_scroll');
    box.classList.remove('header__box_scroll');
    logo.src = 'img/logotype.svg';
  }
}