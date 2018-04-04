// import mockData from '../../server/data/TEST_DATA.json'; 

// articleStore.$inject = ['dbService'];

export default function articleStore(){
	let store = this;	
		
	let articlesList = mockData || [];
	let getArticleIndex = (id) => (articlesList.map((x)=>(x.id)).indexOf(id));

	store.getArticles = () => (articlesList);

	store.addArticle = (article) => {
		// title 
		// date = MM/DD/YYYY
		let newArticle = Object.assign({}, article);
		articlesList.push(newArticle);
	}

	store.deleteArticle = (id) => {
		let index = getArticleIndex(id);
		articlesList.splice(index, 1);
	}

	store.updateArticle = (article) => {
		let index = getArticleIndex(id);
		if(index){
			articlesList[index].title = article.title;
			articlesList[index].date = article.date;
		}
	}

}