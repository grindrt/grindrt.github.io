import Element from "./element.js"

export default class CompositeElement extends Element {
	constructor(type, attributes) {
		super(type, attributes);
		this.elements = [];
	}

	draw() {
		const element = super.draw();
		this.elements.forEach(i => element.appendChild(i.draw()));

		return element;
	}

	add(component) {
		this.elements.push(component);
	}

	remove(component) {
		const index = this.elements.indexOf(component);
		this.elements.splice(index, 1);
	}
}