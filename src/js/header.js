var headerContainer = new Vue({
  el: '.header',
  data: {
    isShowMenu: false,
    isShowHeight: false,
    isScroll: false
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
    },
    headerHandle() {
      this.isScroll = window.pageYOffset > 0;
    }
  },


  mounted() {
    window.onscroll = () => {
      this.headerHandle();
      const tokenSale = document.querySelector('.token-sale');

      if (tokenSale) {
        if (this.isScroll) {
          tokenSale.style.margin = '0';
        } else {
          tokenSale.style.margin = '500px';
        }
      }
    }
    this.headerHandle();

    // console.log(ScrollReveal())
    const sr = ScrollReveal()
    sr.reveal('.home-top__img', {
      delay: 250,
      duration: 600,
      distance: '60px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'bottom',
      interval: 150,
      reset: true
    });
    sr.reveal('.home-top__paragraph', {
      delay: 150,
      duration: 600,
      distance: '60px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'bottom',
      interval: 150,
      reset: true
    });

    sr.reveal('.home-banner', {
      delay: 150,
      duration: 600,
      distance: '50px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'bottom',
      interval: 150,
      reset: true
    });

  }

})