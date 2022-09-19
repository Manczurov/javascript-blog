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

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';

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

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleTagsSelector);

  /* 2 START LOOP: for every article: */

  for (let article of articles) {
 

  // /*3 find tags wrapper */

  const articleTags = article.querySelector(optArticleTagsSelector);
    console.log(articleTags);
  /* make html variable with empty string */

  let html = '';

  /* get tags from data-tags attribute */

  const dataTag = article.getAttribute('data-tags');

  /* let href = clickedElement.getAttribute('href');/

  /*const targetArticle = document.querySelector(href);*/

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
  }
}

generateTags();