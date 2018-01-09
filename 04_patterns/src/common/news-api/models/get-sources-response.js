import Source from "./source.js"

export default class GetSourcesResponse {
	constructor({ status, sources=[] }) {
		this.status = status;
		this.sources = Array.from(sources, source => new Source(source));
	}
}