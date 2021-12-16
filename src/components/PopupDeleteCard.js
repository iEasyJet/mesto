import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(popup) {
    super(popup);
    this._deleteConfirmation = this._popup.querySelector('.popup__btn');
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
