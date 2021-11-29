// Находим секцию profile
export const profile = document.querySelector('.profile');
// Находим кнопку редактирования
export const editBtn = profile.querySelector('.profile__edit-btn');
// Находим кнопку добавления картинок для popup-img
export const newCardBtn = profile.querySelector('.profile__btn');

// Находим popup
export const popupEditProfile = document.querySelector('.popup_type_profile');
// Находим форму popup
export const formElementPopup = popupEditProfile.querySelector('.popup__form');

// Находим popup-img
export const popupImg = document.querySelector('.popup_type_card');
// Находим форму в DOM popup-img
export const formElementImg = popupImg.querySelector('.popup__form');

// Находим popup-pic
export const popupPic = document.querySelector('.popup_type_pic');
// Находим popup-pic__title
export const popupPicTitle = popupPic.querySelector('.popup__pic-title');
// Находим popup-pic__expand
export const popupPicExpand = popupPic.querySelector('.popup__pic-expand');

// Контейнер карточек
export const cardListSelector = '.card';

// Объект настроек для профиля
export const profileSettings = {
  profile: '.popup_type_profile',
  nameInput: '.popup__input_type_name',
  jobInput: '.popup__input_type_job',
  nameProfile: '.profile__name-user',
  jobProfile: '.profile__name-job',
};

// Объект настроеек для создания карточки
export const settingsObject = {
  template: '#card',
  like: '.card__like',
  delete: '.card__delete',
  img: '.card__img',
  title: '.card__title',
};
