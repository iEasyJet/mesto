export class UserInfo {
  constructor(objectSettings, { submitEvent }) {
    this._nameProfile = document.querySelector(objectSettings.nameProfile);
    this._jobProfile = document.querySelector(objectSettings.jobProfile);
    this._popupChangeAvatar = objectSettings.popupChangeAvatar;
    this._closePopup = this._popupChangeAvatar.querySelector('.popup__close');
    this.btnUpdateAvatar = document.querySelector('.profile__pencil');
    this.submitEvent = submitEvent;
    this._avatarProfile = document.querySelector('.profile__img');
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this._userData = {
      name: this._nameProfile.textContent,
      job: this._jobProfile.textContent,
    };

    return this._userData;
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

  // Проставляет данные в разметку
  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._jobProfile.textContent = data.about;
  }

  setUserAvatar(data) {
    this._avatarProfile.src = data.avatar;
  }

  submit() {
    this.submitEvent();
  }

  _open() {
    this._popupChangeAvatar.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popupChangeAvatar.addEventListener('click', this._closeOnOverlay);
    this._closePopup.addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this._popupChangeAvatar.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupChangeAvatar.removeEventListener('click', this._closeOnOverlay);
  }

  openPopup({ validation }) {
    this.btnUpdateAvatar.addEventListener('click', () => {
      this._open();
      validation;
    });
    this.submit();
  }
}
