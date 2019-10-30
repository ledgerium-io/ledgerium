document.addEventListener('DOMContentLoaded', () => {
  let qaBox = document.querySelectorAll('.qa__item');
  for (let i = 0; i < qaBox.length; i++) {
    const header = qaBox[i].querySelector('.qa__header');
    const button = qaBox[i].querySelector('button');
    const article = qaBox[i].querySelector('article');

    header.addEventListener('click', () => {
      if (article.offsetHeight > 0) {
        article.style.borderWidth = 0;
        article.style.marginTop = '0';
        article.style.height = 0;
        button.classList.remove('qa__btn_is-show');
      } else {
        article.style.height = `${article.scrollHeight}px`;
        article.style.borderWidth = '1px';
        article.style.marginTop = '1.6em';
        button.classList.add('qa__btn_is-show');
      }
    });
  }

  const learnMoreLinks = document.querySelectorAll('.learn-more');
  for (let i = 0; i < learnMoreLinks.length; i++) {
    learnMoreLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      
      const hash = learnMoreLinks[i].hash;
      const div = document.querySelector(hash);
      const scroll = div.offsetTop + 160;
      scrollTo(0, scroll);
    })
  }
});