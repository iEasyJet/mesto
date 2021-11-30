import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, { callBack }) {
    super(selectorPopup);
    this._callBack = callBack;
    this._form = this._selectorPopup.querySelector('.popup__form');
  }

  getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  callBack() {
    this._callBack();
    this.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.callBack();
    });
  }
}
