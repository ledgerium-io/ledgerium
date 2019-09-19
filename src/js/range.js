var range = new Vue({
  el: '.pricing',
  data: {
    current: '0',
    prices: [
      {
        period: 'Q1 & Q2 2019',
        title: 'Testnet'
      },
      {
        period: 'Q3 2019',
        title: 'Mainnet'
      },
      {
        period: 'Q1 2020',
        title: 'Services'
      },
      {
        period: 'Q2 2020',
        title: 'Cross Chain Tx'
      },
      {
        period: 'Q4 2020',
        title: 'Scaling'
      }
    ]
  },
  methods: {
    sliderMove(e) {
      const circles = document.querySelectorAll('.range__span');
      for (let i = 0; i < circles.length; i++) {
        if (e.clientX > (circles[i].offsetLeft - 70)) {
          this.current = i;
        }
      }
    },
    sliderHandle() {
      if (document.body.clientWidth > 840) {
        document.addEventListener('mousemove', this.sliderMove);
        document.addEventListener('mouseup', this.sliderLeave);
      }
    },
    sliderLeave() {
      document.removeEventListener('mousemove', this.sliderMove);
    }
  },
  computed: {
    progress() {
      if (document.body.clientWidth <= 840) {
        switch(this.current) {
          case '1':
            return '10%';
          case '2':
            return '25%'; 
          case '3':
            return '52%'; 
          case '4':
            return '67%'; 
        }
      }

      return 25 * this.current + '%';
    }
  }
});