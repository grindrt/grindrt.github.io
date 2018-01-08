import Article from "./article.js"

export default class GetArticlesResponse {
    constructor ({status, source, sortBy, articles=[]}) {
        this.status = status;
        this.source = source;
        this.sortBy = sortBy;
        this.articles = Array.from(articles, article => new Article(article));
    }
}