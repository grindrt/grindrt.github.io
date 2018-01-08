export default class ElementPrototype extends Prototype {
    constructor() {
        super();
    }

    setAttribute(key, value){
      this[key] = value;
    }

    Clone(){
      let clone = new ElementPrototype();
      let keys = Object.keys(this);
      keys.forEach(k => clone.setFeature(k, this[k]));

      return clone;
    }
}
