'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
      
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
  
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    
    let href = clickedElement.getAttribute("href");
         
    const targetArticle = document.querySelector(href);
      
    targetArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

      /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    
    titleList.innerHTML = '';
    
    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

    for(let article of articles){    

    /* get the article id */
    
    const articleId = article.querySelector("id");
 
    /* find the title element */
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */
    
    titleList.insertAdjacentHTML("beforeend", titleList.innerHTML + linkHTML);

    html = html + linkHTML;

    console.log(html);
  }

  titleList.innerHTML = html;

  }

  generateTitleLinks();