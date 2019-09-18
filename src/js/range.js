var range = new Vue({
  el: '.pricing',
  data: {
    current: 0,
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
});