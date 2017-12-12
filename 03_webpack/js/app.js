require("../styles/main.scss");

import 'whatwg-fetch';
import 'babel-polyfill';
import { NewsModel, InheritanceForInheritance } from "./lib/models.js";

const buttons = Array.from(document.querySelectorAll('[data-news]'));
buttons.forEach((button) => {
	button.addEventListener('click',
		() => {
			const source = button.getAttribute('data-source');
			import(/* webpackChunkName: "loadNews" */'./lib/loadNews.js')
				.then(_ => {
					_.getNews(source);
				})
				.catch(err => {
					console.log("Chunk loading failed");
					console.log(err);
				});
		});
});
