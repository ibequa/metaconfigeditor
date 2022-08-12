const COMPOSITOR_TYPE = {
    ALL: 'all',
    SEQUENCE: 'sequence',
    CHOICE: 'choice',
    COMPLEX_CONTENT: 'complexContent',
    SIMPLE_CONTENT: 'simpleContent',
};

class Element {
    constructor(name, type, minOccurs, maxOccurs) {
        Object.assign(this, {name, type, minOccurs, maxOccurs});
    }
}

class Type {
    constructor(name) {
        Object.assign(this, {name});
    }
}

class SimpleType extends Type {}

class ComplexType extends Type {
    constructor(name, compositorType) {
        super(name);
        Object.assign(this, {compositorType});
        this.attribs = [];
        this.children = {};
    }

    addElement(name, type, minOccurs, maxOccurs) {
        minOccurs |= 1;
        maxOccurs |= 1;
        this.children[name] = new Element(name, type, minOccurs, maxOccurs);
        return this;
    }

    addAttribs(...attribs) {
        attribs.forEach(attrib => {
            this.attribs.push(attrib);
        })
        return this;
    }
}
