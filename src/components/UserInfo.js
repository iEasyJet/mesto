export class UserInfo {
  constructor(objectSettings) {
    this._nameProfile = document.querySelector(objectSettings.nameProfile);
    this._jobProfile = document.querySelector(objectSettings.jobProfile);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this._userData = {
      name: this._nameProfile.textContent,
      job: this._jobProfile.textContent,
    };

    return this._userData;
  }

  // Проставляет данные в разметку
  setUserInfo(data) {
    this._nameProfile.textContent = data[0].name;
    this._jobProfile.textContent = data[0].link;
  }
}
