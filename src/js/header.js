const headerHandle = () => {
  const headerWrap = document.querySelector('.header');
  const box = document.querySelector('.header__box');
  const logo = document.querySelectorAll('.header__logo-img');

  if (window.pageYOffset > 0) {
    headerWrap.classList.add('header_scroll');
    box.classList.add('header__box_scroll');
    logo[0].style.display = 'none';
    logo[1].style.display = 'inline-block';
  } else {
    headerWrap.classList.remove('header_scroll');
    box.classList.remove('header__box_scroll');
    logo[0].style.display = 'inline-block';
    logo[1].style.display = 'none';
  }
}

window.onscroll = () => {
  headerHandle();
}

document.addEventListener('DOMContentLoaded', () => {
  headerHandle();
});

var headerContainer = new Vue({
  el: '.header',
  data: {
    isShowMenu: false,
    isShowHeight: false
  },
  methods: {
    toggleMenu() {
      if (this.isShowMenu) {
        this.isShowHeight = false;
        setTimeout(() => {
          this.isShowMenu = false;
        }, 100);
      } else {
        this.isShowMenu = true;
        this.isShowHeight = true;
      }
      headerHandle();
    }
  }
})