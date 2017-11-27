const apiKey = 'cbcde34889f4417b9dce339f88f24de8';

let getUrl = (endpoint, ...sourcesArr) => {
  let sources = sourcesArr.join(', ');
  return `https://newsapi.org/v2/${endpoint}?sources=${sources}&apiKey=${apiKey}`;
}

let getNews = (source) => {
  let endpoint = 'top-headlines';
  let url = getUrl(endpoint, source);
  fetch(url)
  .then((resp)=>{
  	resp.json().then(fillNews);
  })  
  .catch(
    (err)=>{
      console.log(err);
    });
}

let fillNews = (data) => {
  let {articles} = data;
  let html ='';
  articles.forEach(item=>{
    let imgUrl = item.urlToImage ? item.urlToImage : 'img/not-found.jpg';
    html += `<div id="news-container">
            <div class="news-img">
                <img class="image" src='${imgUrl}'/>   
                <a class="news-title" href="${item.url}"><span>${item.title}</span></a>  
                <div class="description-container"> 
                    <div class="description-text"><p>${item.description}</p></div>
                </div>
            </div>
    </div>`;
  });

  document.getElementById("news").innerHTML = html;
}