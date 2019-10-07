{
  const links = document.querySelectorAll('.xlg-top a');
  const box = document.querySelector('.xlg-way__box');

  const classHandle = (link) => {
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove('tabs__item_active');
    }
    link.classList.add('tabs__item_active');
  }

  for (let i = 0; i < (links.length - 1); i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();
      const width = document.documentElement.clientWidth;
      box.style.transform = `translateX(${-i * width}px)`;
      classHandle(links[i]);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
  });
}