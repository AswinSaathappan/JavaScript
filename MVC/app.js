class Model {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

class View {
    constructor() {
        this.app = document.getElementById("app");
        this.counterDisplay = document.createElement("h1");
        this.incrementButton = document.createElement("button");
        this.decrementButton = document.createElement("button");

        this.incrementButton.textContent = "+";
        this.decrementButton.textContent = "-";
        this.counterDisplay.textContent = "0";

        this.app.append(this.counterDisplay, this.incrementButton, this.decrementButton);
    }

    updateCounter(value) {
        this.counterDisplay.textContent = value;
    }

    bindIncrement(handler) {
        this.incrementButton.addEventListener("click", handler);
    }

    bindDecrement(handler) {
        this.decrementButton.addEventListener("click", handler);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindIncrement(this.handleIncrement.bind(this));
        this.view.bindDecrement(this.handleDecrement.bind(this));
    }

    handleIncrement() {
        this.model.increment();
        this.view.updateCounter(this.model.getCount());
    }

    handleDecrement() {
        this.model.decrement();
        this.view.updateCounter(this.model.getCount());
    }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
