export default class GetArticlesRequest {
	constructor({ source, apiKey, sortBy = "top" }) {
		this.source = source;
		this.apiKey = apiKey;
		this.sortBy = sortBy;
	}
}