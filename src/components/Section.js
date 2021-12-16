export class Section {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems({ items, renderer }) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
