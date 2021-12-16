export class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closePopup = this._popup.querySelector('.popup__close');
  }

  // Метод открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._closeOnOverlay);
  }

  // Метод закрытия попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._closeOnOverlay);
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
