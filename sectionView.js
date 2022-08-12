class SectionArgsView {
    constructor(parent, section) {
        this.section = section;
        this.parent = parent;
        this.argsView = this.section.args.map(arg => {
            let element = document.createElement("input");
            element.type = "text";
            element.placeholder = arg[0];
            return element;
        });

        this.argsView.forEach(argView => {
            this.parent.appendChild(argView);
        })
    }

    save() {
        for (let i = 0; i < this.argsView.length; i++) {
            this.section.args[i] = this.argsView[i].value;
        }
    }
}

class SectionValueView {
    constructor(parent, section) {
        this.section = section;

        this.element = document.createElement("input");
        this.element.type = "text";
        this.element.placeholder = "value";

        parent.appendChild(this.element);
    }

    save() {
        this.section.value = this.element.value;
    }
}

class SectionChildrenView {
    constructor(sectionViews) {
        this.sectionViews = sectionViews;
    }

    save() {
        this.sectionViews.forEach(view => view.save());
    }
}

class SectionView {
    constructor(parent, section) {
        this.section = section;

        this.element = document.createElement("div");
        this.element.innerHTML = `<b>${this.section.title}</b>: `;

        this.argsView = new SectionArgsView(this.element, section);

        if (this.section.value !== undefined) {
            this.bodyView = new SectionValueView(this.element, section);
        } else {
            let views = this.section.children.map(child => new SectionView(this.element, child));
            this.bodyView = new SectionChildrenView(views);
        }

        this.element.style.marginLeft = "20px";
        parent.appendChild(this.element);
    }

    save() {
        this.argsView.save();
        this.bodyView.save();
    }
}