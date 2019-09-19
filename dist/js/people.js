const showMore = e => {
  const button = e.path[0];
  const container = e.path[1];
  const cards = container.querySelectorAll('.people__item');

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add('people__item_show');
  }

  button.style.display = 'none';
};