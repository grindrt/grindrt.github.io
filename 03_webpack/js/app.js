import 'whatwg-fetch';
import 'babel-polyfill';
require("../styles/main.scss");
import { NewsModel, InheritanceForInheritance } from "./lib/models.js";

const buttons = Array.from(document.querySelectorAll('[data-news]'));
buttons.forEach((button) => {
	button.addEventListener('click',
		() => {
			const source = button.getAttribute('data-source');
			import
			('./lib/loadNews.js')
				.then(module => {
					module.getNews(source);
				})
				.catch(err => {
					console.log("Chunk loading failed");
					console.log(err);
				});
		});
});