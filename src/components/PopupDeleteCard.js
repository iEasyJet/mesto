import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._deleteConfirmation = this._selectorPopup.querySelector('.popup__btn');
  }

  setNewSubmit(submitHandler) {
    this._submit = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteConfirmation.addEventListener('click', () => {
      this._submit();
    });
  }
}
