{
  const links = document.querySelectorAll('.xgl-top a');

  const classHandle = (link) => {
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove('tabs__item_active');
    }
    link.classList.add('tabs__item_active');
  }

  const currentLinkHandle = (box) => {
      for (let i = 0; (i < links.length - 1); i++) {
        let nextDivOffset = document.querySelector('.the-way__box').clientHeight;
        if (box) {
          nextDivOffset = box.scrollWidth;
        }

        if (links[i + 1].hash) {
          nextDivOffset = document.querySelector(links[i + 1].hash).offsetTop + 150;

          if (box) {
            nextDivOffset = document.querySelector(links[i + 1].hash).offsetLeft - 60;
          }
        }

        let divOffset = document.querySelector(links[i].hash).offsetTop + 150;

        if (box) {
          divOffset = document.querySelector(links[i].hash).offsetLeft - 60;
        }

        if (box) {
          if (box.scrollLeft > divOffset && box.scrollLeft < nextDivOffset) {
            classHandle(links[i]);
          }
        } else if (window.pageYOffset > divOffset && window.pageYOffset < nextDivOffset) {
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
      div.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const box = document.querySelector('.the-way__box');
  const width = document.body.clientWidth;

  window.addEventListener('scroll', () => {
    if (width > 767) {
      currentLinkHandle();
    }
  });

  box.addEventListener('scroll', () => {
    if (width < 768) {
      currentLinkHandle(box);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (width > 767) {
      currentLinkHandle();
    } else {
      currentLinkHandle(box);
    }
  });
}