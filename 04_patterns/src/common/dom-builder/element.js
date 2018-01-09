//factory
export default class Element {
	constructor(type, attributes) {
		this.type = type;
		this.attributes = attributes;
	}

	draw() {
		const element = document.createElement(this.type);
		for (let attribute in this.attributes) {
			element.setAttribute(attribute, this.attributes[attribute]);
		}
		return element;
	}
}
