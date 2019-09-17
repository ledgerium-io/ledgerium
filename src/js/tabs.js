{
  const links = document.querySelectorAll('.xgl-top a');
  for (let i = 0; i < (links.length - 1); i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();
      for (let k = 0; k < links.length; k++) {
        links[k].classList.remove('tabs__item_active');
      }
      e.target.classList.add('tabs__item_active');
      const id = e.target.hash;
      const div = document.querySelector(id);
      div.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}