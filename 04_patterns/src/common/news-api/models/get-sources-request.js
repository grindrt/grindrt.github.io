export default class GetSourcesRequest {
	constructor({ category, language = "en", country = "" }) {
		this.category = category;
		this.language = language;
		this.country = country;
	}
}