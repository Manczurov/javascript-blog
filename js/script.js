'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.posts .active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  let href = clickedElement.getAttribute('href');

  const targetArticle = document.querySelector(href);

  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {


  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';


  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {


    const articleId = article.getAttribute('id');


    const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    
    titleList.insertAdjacentHTML('beforeend', titleList.innerHTML + linkHTML);

    html = html + linkHTML;

  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();