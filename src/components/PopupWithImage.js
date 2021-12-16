import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popupSelector.querySelector('.popup__pic-title');
    this._expand = this._popupSelector.querySelector('.popup__pic-expand');
  }
  open(name, link) {
    super.open();
    this._title.textContent = name;
    this._expand.src = link;
    this._expand.alt = name;
  }
}
