import FetchProxy from "../fetch-proxy.js"
import GetArticlesResponse from "./models/get-articles-response.js"
import GetSourcesResponse from "./models/get-sources-response.js"

export default class NewsApiClient {
    static GetArticles(request) {
        const url = `https://newsapi.org/v1/articles?source=${request.source}&apiKey=${request.apiKey}&sortBy=${request.sortBy}`;

        return new Promise((resolve, reject) => {
            FetchProxy.fetch(url)
                .then(data => resolve(new GetArticlesResponse(data)))
                .catch(exception => reject(exception));
        });
    }

    static GetSources(request) {
        const url = `https://newsapi.org/v1/sources?category=${request.category}&language=${request.language}&country={request.country}`;

        return new Promise((resolve, reject) => {
            FetchProxy.fetch(url)
                .then(data => resolve(new GetSourcesResponse(data)))
                .catch(exception => reject(exception));
        });
    }
}