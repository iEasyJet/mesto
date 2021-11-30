export class UserInfo {
  constructor(objectSettings) {
    this._nameInput = document.querySelector(objectSettings.nameInput);
    this._jobInput = document.querySelector(objectSettings.jobInput);
    this._nameProfile = document.querySelector(objectSettings.nameProfile);
    this._jobProfile = document.querySelector(objectSettings.jobProfile);
  }

  // Проставляет данные в инпуты
  getUserInfo() {
    this._nameInput.value = this._nameProfile.textContent;
    this._jobInput.value = this._jobProfile.textContent;
  }

  // Проставляет данные в разметку
  setUserInfo() {
    this._nameProfile.textContent = this._nameInput.value;
    this._jobProfile.textContent = this._jobInput.value;
  }
}
