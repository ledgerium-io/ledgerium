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
        button.innerText = '+';
      } else {
        article.style.height = `${article.scrollHeight}px`;
        article.style.borderWidth = '1px';
        article.style.marginTop = '1.6em';
        button.innerText = '-';
      }
    });
  }
});