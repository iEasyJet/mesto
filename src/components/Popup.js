export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closePopup = this._popupSelector.querySelector('.popup__close');
  }

  // Метод открытия попапа
  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector.addEventListener('click', this._closeOnOverlay);
  }

  // Метод закрытия попапа
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.removeEventListener('click', this._closeOnOverlay);
  }

  // Метод закрытия попапа по ESC
  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  // Метод закрытия попапа по оверлею
  _closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    }
  };

  // Комплект слушателей
  setEventListeners() {
    this._closePopup.addEventListener('click', () => {
      this.close();
    });
  }
}
