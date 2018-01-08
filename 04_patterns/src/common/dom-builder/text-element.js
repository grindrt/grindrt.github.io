import Element from "./element.js"

export default class TextElement extends Element {
    constructor(text) {
        super("text")
        this.text = text;
    }

    draw() {
        return document.createTextNode(this.text)
    }
}