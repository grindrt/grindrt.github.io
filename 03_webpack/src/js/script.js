import '~/src/scss/style.scss';
import '~/src/scss/buttons.scss';

import { NewsModel, InheritanceForInheritance} from "./lib/models.js";

const buttons = Array.from(document.querySelectorAll('[data-news]'));
buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const source = button.dataset.source;
    getNews(source);
  })
});

let getUrl = (endpoint, ...sourcesAtr) => {
  const apiKey = 'cbcde34889f4417b9dce339f88f24de8';
  let sources = sourcesAtr.join(', ');
  return `https://newsapi.org/v2/${endpoint}?sources=${sources}&apiKey=${apiKey}`;
}

let getNews = (source) => {
  let endpoint = 'top-headlines';
  let url = getUrl(endpoint, source);
  fetch(url)
  .then((resp) => {	resp.json().then(fillNews); })
  .catch((err) => { console.log(err); });
}

let fillNews = (data) => {
  let {articles} = data;
  let newsMap = new Map();
  articles.forEach((item, index)=>{ newsMap.set(index, new NewsModel(item.title, item.description, item.url, item.urlToImage)); });
  let html = () => {
    let html ='';
    for (let item of newsMap.values()) { html += item.toHtml(); }
    return html;
  }

  document.getElementById("news").innerHTML = html();
}

export {getNews};
