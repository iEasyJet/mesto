import { Popup } from './Popup.js';

export class PopupUpdateAvatar extends Popup {
  constructor(selectorPopup, { submitEvent }) {
    super(selectorPopup);
    this.btnUpdateAvatar = document.querySelector('.profile__pencil');
    this.submitEvent = submitEvent;
    this._avatarProfile = document.querySelector('.profile__img');
  }

  submit() {
    this.submitEvent();
    this.close();
    this.setEventListeners();
  }

  openPopup({ validation }) {
    this.btnUpdateAvatar.addEventListener('click', () => {
      this.open();
      validation;
    });
    this.submit();
  }

  setUserAvatar(link) {
    this._avatarProfile.src = link;
  }
}
