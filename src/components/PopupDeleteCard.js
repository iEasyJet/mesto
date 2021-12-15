import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._deleteConfirmation = selectorPopup.querySelector('.popup__btn');
  }

  deleteCard(deleteCard) {
    this._deleteConfirmation.addEventListener('click', () => {
      deleteCard();
      this.close();
    });
  }
}
