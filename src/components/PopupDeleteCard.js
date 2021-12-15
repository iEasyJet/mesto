import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._deleteConfirmation = selectorPopup.querySelector('.popup__btn');
  }

  submit(par) {
    this._submit = par;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteConfirmation.addEventListener('click', () => {
      this._submit();
    });
  }
}
