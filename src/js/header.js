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
    }
    this.headerHandle();
  }
})