import { handleCardClick, handleDeleteCard } from '../pages/index.js';

// Находим секцию profile
export const profile = document.querySelector('.profile');
// Находим кнопку редактирования
export const editBtn = profile.querySelector('.profile__edit-btn');
// Находим кнопку добавления картинок для popup-img
export const newCardBtn = profile.querySelector('.profile__btn');

// Находим popup
export const popupEditProfile = '.popup_type_profile';
// Находим popup
const popupEditProfileForm = document.querySelector('.popup_type_profile');
// Находим форму popup
export const formElementPopup =
  popupEditProfileForm.querySelector('.popup__form');
export const nameInput = formElementPopup.querySelector(
  '.popup__input_type_name'
);
export const jobInput = formElementPopup.querySelector(
  '.popup__input_type_job'
);

// Находим popup-img
export const popupImg = '.popup_type_card';
// Находим popup-img
const popupImgForm = document.querySelector('.popup_type_card');
// Находим форму в DOM popup-img
export const formElementImg = popupImgForm.querySelector('.popup__form');
// Находим popup-pic
export const popupPic = '.popup_type_pic';

// Контейнер карточек
export const cardListSelector = '.card';

// Попап подтверждения удаления карточки
export const popupDeleteConfirmation = '.popup_type_delete-card';

// Попап изменения аватара
export const popupChangeAvatar = '.popup_type_new-avatar';
export const formChangeAvatar = document.querySelector(
  '.popup__form_update_avatar'
);
export const popupAvatarLink = formChangeAvatar.querySelector('.popup__input');

// Объект настроек для профиля
export const profileSettings = {
  nameProfile: '.profile__name-user',
  jobProfile: '.profile__name-job',
};

// Конфиг апи
export const configdApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-31',
  token: 'e34c71c9-c8d5-4539-958c-5ad6a7cda687',
};

// Объект настроеек для создания карточки
export const settingsObject = {
  template: '#card',
  like: '.card__like',
  likeCounter: '.card__like-counter',
  delete: '.card__delete',
  img: '.card__img',
  title: '.card__title',
  handleCardClick: handleCardClick,
  handleDeleteCard: handleDeleteCard,
};

// Объект настроеек для валидации
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};
