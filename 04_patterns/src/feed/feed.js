import "babel-polyfill";
import "isomorphic-fetch";
import GetArticleRequest from "../common/news-api/models/get-articles-request.js"
import NewsApiClient from "../common/news-api/news-api-client.js"
import { buildErrorMessage, buildNewsFeed, buildPopularList } from "./builders/feed-builder.js";
import { createStore } from "../common/state-store.js";

const replaceArticles = (newArticles) => {
	return [...newArticles];
}

const latestNewsReducer = (state = [], action) => {
	switch (action.type) {
	case "UPDATE_LATEST_NEWS":
		return replaceArticles(action.articles);
	default:
		return state;
	}
}

const topNewsReducer = (state = [], action) => {
	switch (action.type) {
	case "UPDATE_TOP_NEWS":
		return replaceArticles(action.articles);
	default:
		return state;
	}
}

const feedReducer = (state, action) => {
	switch (action.type) {
	case "UPDATE_LATEST_NEWS":
		return Object.assign({}, state, { latestNews: latestNewsReducer(state, action) });
	case "UPDATE_TOP_NEWS":
		return Object.assign({}, state, { topNews: topNewsReducer(state, action) });
	default:
		return state;
	}
}

let feedStore = createStore(feedReducer);

const updateFeed = (source = "bbc-news") => {
	const element = document.getElementById("main-content");

	NewsApiClient.GetArticles({ source: source, apiKey: "cbcde34889f4417b9dce339f88f24de8", sortBy: "top" })
		.then(data => feedStore.dispatch({ type: "UPDATE_LATEST_NEWS", articles: data.articles }))
		.catch((exception) => {
			console.error(exception);
			element.appendChild(buildErrorMessage());
		});

	const sidebar = document.getElementById("sidebar");

	NewsApiClient.GetArticles({ source: source, apiKey: "cbcde34889f4417b9dce339f88f24de8", sortBy: "top" })
		.then(data => feedStore.dispatch({ type: "UPDATE_TOP_NEWS", articles: data.articles }))
		.catch((exception) => {
			console.error(exception);
			sidebar.appendChild(buildErrorMessage());
		});
};

const renderFeed = () => {
	const state = feedStore.getState();

	if (state.latestNews !== undefined) {
		const mainContentElement = document.getElementById("main-content");
		const latestNewsElement = document.getElementById("latest-news");

		if (latestNewsElement !== null) {
			mainContentElement.removeChild(latestNewsElement);
		}
		mainContentElement.appendChild(buildNewsFeed(state.latestNews));
	}

	if (state.topNews !== undefined) {
		const sidebarElement = document.getElementById("sidebar");
		const topNewsElement = document.getElementById("top-news");

		if (topNewsElement !== null) {
			sidebarElement.removeChild(topNewsElement);
		}
		sidebarElement.appendChild(buildPopularList(state.topNews));
	}
}

feedStore.subscribe(renderFeed);

export { updateFeed }
