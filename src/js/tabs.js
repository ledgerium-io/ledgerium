{
  const links = document.querySelectorAll('.xgl-top a');

  const classHandle = (link) => {
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove('tabs__item_active');
    }
    link.classList.add('tabs__item_active');
  }

  const currentLinkHandle = () => {
    for (let i = 0; (i < links.length - 1); i++) {
      let nextDivOffset = document.querySelector('.the-way__box').clientHeight;
      if (links[i + 1].hash) {
        nextDivOffset = document.querySelector(links[i + 1].hash).offsetTop + 150;
      }
      const divOffset = document.querySelector(links[i].hash).offsetTop + 150;

      if (window.pageYOffset > divOffset && window.pageYOffset < nextDivOffset) {
        classHandle(links[i]);
      }
    }
  }

  for (let i = 0; i < (links.length - 1); i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();

      classHandle(e.target);
      
      const id = e.target.hash;
      const div = document.querySelector(id);
      div.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  window.onscroll = () => {
    currentLinkHandle();
  }

  document.addEventListener('DOMContentLoaded', () => {
    currentLinkHandle();
  });
}