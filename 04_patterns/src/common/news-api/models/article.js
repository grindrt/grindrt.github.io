export default class Article {
	constructor ({ author, title, description, url, urlToImage, publishedAt }) {
		this.author = author;
		this.title = title;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt === null ? null : new Date(publishedAt);
	}
}