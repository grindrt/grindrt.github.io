import CompositeElement from "../../common/dom-builder/composite-element.js"
import TextElement from "../../common/dom-builder/text-element.js"

const buildErrorMessage = function() {
	let header = new CompositeElement("h2", { class: "error" });
	header.add(new TextElement("Error during fetch"));

	let container = new CompositeElement("div", { class: "container" });
	container.add(header);

	return container.draw();
};

const buildNewsFeed = function(articles) {
	let buildHeader = (article) => {
		let header = new CompositeElement("h2", { class: "article-title" });
		header.add(new TextElement(article.title));

		let container = new CompositeElement("header", { class: "article-heading" });
		container.add(header);

		return container;
	};

	let buildDescription = (article) => {
		let descriptionContainer = new CompositeElement("div", { class: "article-description" });
		descriptionContainer.add(new TextElement(article.description));

		return descriptionContainer;
	};

	let buildImg = (article) => {
		let imageContainer = new CompositeElement("div", { class: "article-image" });
		imageContainer.add(new CompositeElement("img", { src: article.urlToImage, alt: article.urlToImage }));

		return imageContainer;
	}

	let buildFooter = (article) => {
		let author = new CompositeElement("address", { class: "article-author" });
		author.add(new TextElement(article.author === null ? "" : article.author));

		let publishedAt = new CompositeElement("p", { class: "article-date" });
		publishedAt.add(new TextElement(article.publishedAt === null ? "" : article.publishedAt.toLocaleString()));

		let container = new CompositeElement("footer", { class: "article-footer" })
		container.add(author);
		container.add(publishedAt);

		return container;
	};

	let nodes = Array.from(articles,
		article => {
			let container = new CompositeElement("article", { class: "article" });
			container.add(buildHeader(article));
			container.add(buildImg(article));
			container.add(buildDescription(article));
			container.add(buildFooter(article));

			return container;
		});

	let container = new CompositeElement("div", { class: "container", id: "latest-news" });
	nodes.forEach(node => container.add(node));

	return container.draw();
};

const buildPopularList = function(articles) {
	let buildHeader = (article) => {
		let link = new CompositeElement("a", { target: "_blank", href: article.url });
		link.add(new TextElement(article.title));

		let header = new CompositeElement("h2", { class: "article-title" });
		header.add(link);

		let container = new CompositeElement("header", { class: "article-heading" });
		container.add(header);

		return container;
	};

	let buildBody = (article) => {
		let imageContainer = new CompositeElement("div", { class: "article-image" });
		imageContainer.add(new CompositeElement("img", { src: article.urlToImage, alt: article.urlToImage }));

		let container = new CompositeElement("div", { class: "article-body" });
		container.add(imageContainer);

		return container;
	};

	let nodes = Array.from(articles,
		article => {
			let container = new CompositeElement("article", { class: "article-aside" });
			container.add(buildHeader(article));
			container.add(buildBody(article));

			return container;
		});

	let container = new CompositeElement("div", { class: "container", id: "top-news" });
	nodes.forEach(node => container.add(node));

	return container.draw();
}

export { buildErrorMessage, buildNewsFeed, buildPopularList };
