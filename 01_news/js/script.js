let getUrl = (endpoint, ...sourcesAtr) => {
  const apiKey = 'cbcde34889f4417b9dce339f88f24de8';
  let sources = sourcesAtr.join(', ');
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
  let newsMap = new Map();
  articles.forEach((item, index)=>{ newsMap.set(index, new NewsModel(item.title, item.description, item.url, item.urlToImage)); });
  let html = () => {
    let html ='';
    for (item of this.newsMap) { html += item.toHtml(); }
    return html;
  }

  document.getElementById("news").innerHTML = html();
}

class NewsModel{
	constructor(title, description, url, imgUrl){
		this.title = title;
		this.description = description;
		this.url = url;
		this.imgUrl = imgUrl;
	}

	get title(){
		return this._title;
	}

	set title(value){
		this._title = value;
	}

	get description(){
		return this._description;
	}

	set description(value){
		this._description = value;
	}

	get url(){
		return this._url;
	}

	set url(value){
		this._url = value;
	}

	get imgUrl(){
		return this._imgUrl ? this._imgUrl : 'img/not-found.jpg';
	}

	set imgUrl(value){
		this._imgUrl = value;
	}

	toHtml(){
		return `<div class="news-container">
            		<div class="news-img">
                		<img class="image" src='${this.imgUrl}'/>
                		<a class="news-title" href="${this.url}"><span>${this.title}</span></a>
                		<div class="description-container">
                    		<div class="description-text"><p>${this.description}</p></div>
                		</div>
            		</div>
   				</div>`;
	}
}

class InheritanceForInheritance extends NewsModel {
	get imgUrl(){
		return this._imgUrl;
	}
}
