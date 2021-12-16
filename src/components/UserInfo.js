export class UserInfo {
  constructor(objectSettings) {
    this._nameProfile = document.querySelector(objectSettings.nameProfile);
    this._jobProfile = document.querySelector(objectSettings.jobProfile);
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

  getUserId(data) {
    this.userId = data._id
  }

  giveUserId() {
    return this.userId
  }

  // Проставляет данные в разметку
  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._jobProfile.textContent = data.about;
  }

  // Проставляет аватар в разметку
  setUserAvatar(data) {
    this._avatarProfile.src = data.avatar;
  }
}
