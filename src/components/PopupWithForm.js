import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, { callBack }) {
    super(selectorPopup);
    this._callBack = callBack;
  }

  reset() {
    this._inputs = this._selectorPopup.querySelectorAll('.popup__input');

    this._inputs.forEach((input) => {
      input = '';
    });
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
  }
}
