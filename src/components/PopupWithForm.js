import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submitEvent }) {
    super(popupSelector);
    this._callBack = submitEvent;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._button = this._form.querySelector('.popup__btn');
    this._btnUpdateAvatar = document.querySelector('.profile__pencil');
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const formValues = {};

    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._callBack(this._getInputValues());
    });
  }

  // Смена текста при загрузке информации на сервер
  changeButtonName(word) {
    this._button.textContent = word;
  }
}
