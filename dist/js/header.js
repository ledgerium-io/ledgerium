window.onscroll = () => {
  const header = document.querySelector('.header');
  const box = document.querySelector('.header__box');
  const logo = document.querySelectorAll('.header__logo-img');

  if (window.pageYOffset > 0) {
    header.classList.add('header_scroll');
    box.classList.add('header__box_scroll');
    logo[0].style.display = 'none';
    logo[1].style.display = 'inline-block';
  } else {
    header.classList.remove('header_scroll');
    box.classList.remove('header__box_scroll');
    logo[0].style.display = 'inline-block';
    logo[1].style.display = 'none';
  }
};