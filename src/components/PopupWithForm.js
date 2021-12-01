import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, { callBack }) {
    super(selectorPopup);
    this._callBack = callBack;
    this._form = this._selectorPopup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');

    const formValues = [
      {
        name: this._inputList[0].value,
        link: this._inputList[1].value,
      },
    ];

    return formValues;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      this._callBack(this._getInputValues());
      this.close();
      this._form.reset();
    });
  }
}
