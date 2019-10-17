{
  const links = document.querySelectorAll('.xlg-top a');
  const box = document.querySelector('.xlg-way__box');

  const classHandle = (link) => {
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove('tabs__item_active');
    }
    link.classList.add('tabs__item_active');
  }

  const moveTab = (i) => {
    const width = document.querySelector('.xlg-way__item').clientWidth;
    box.style.transform = `translateX(${-i * width}px)`;
    classHandle(links[i]);
  }

  for (let i = 0; i < (links.length - 1); i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();

      moveTab(i);
    });
  }

  const init = () => {
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains('tabs__item_active')) {
        moveTab(i);
      }
    }
  }
  
  const moveByHash = () => {
    const hash = window.location.hash;
    const hashes = ['#distribution', '#validators', '#buy', '#watch', '#wallets'];
    
    if (hash && hashes.indexOf(hash) !== -1) {
      moveTab(hashes.indexOf(hash));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    classHandle(links[0]);
    moveByHash();
  });

  window.addEventListener('resize', () => {
    init();
  });
  
  window.addEventListener('hashchange', () => {
    moveByHash();
  });
    
}
