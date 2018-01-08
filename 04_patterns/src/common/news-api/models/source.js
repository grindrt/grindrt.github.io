import UrlToLogos from "./urls-to-logos.js"

export default class Source {
    constructor({id, name, description, url, category, language, country, urlToLogos, sortBysAvailable=[]}) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogos = new UrlToLogos(urlToLogos.small, urlToLogos.medium, urlToLogos.large);
        this.sortBysAvailable = sortBysAvailable;
    }
}