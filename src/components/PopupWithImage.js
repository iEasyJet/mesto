import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._title = this._popup.querySelector('.popup__pic-title');
    this._expand = this._popup.querySelector('.popup__pic-expand');
  }
  open(name, link) {
    super.open();
    this._title.textContent = name;
    this._expand.src = link;
    this._expand.alt = name;
  }
}
