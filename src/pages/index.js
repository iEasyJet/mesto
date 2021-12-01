import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  editBtn,
  newCardBtn,
  popupEditProfile,
  formElementPopup,
  popupImg,
  formElementImg,
  profileSettings,
  validationConfig,
  newSection,
  newProfileValue,
} from '../utils/constants.js';

// Данные профиля
const userInfo = new UserInfo(profileSettings);
const profilePopup = new PopupWithForm(popupEditProfile, {
  callBack: (formValues) => {
    userInfo.setUserInfo(formValues);
    profilePopup.close();
  },
});

// Слушатели на закрытие и сабмит формы профиля
profilePopup.setEventListeners();

// Слушатель на открытие профиля
editBtn.addEventListener('click', () => {
  profilePopup.open();
  newProfileValue(userInfo.getUserInfo());
  profileEditFormValidation.resetValidation();
});

// Включаем валидацию на форму редактирования профиля
const profileEditFormValidation = new FormValidator(
  validationConfig,
  formElementPopup
);
profileEditFormValidation.enableValidation();

// Включаем валидацию на форму добавления новых карточек
const newCardFormValidation = new FormValidator(
  validationConfig,
  formElementImg
);
newCardFormValidation.enableValidation();

// Добавляем массив карточек на страницу
newSection(initialCards);

// Добавление новых карточек
const shapeOfNewCards = new PopupWithForm(popupImg, {
  callBack: (formValues) => {
    newSection(formValues);
  },
});

// Добавление слушателей на закрытие
shapeOfNewCards.setEventListeners();

// Слушатель на открытие попапа новых карточек
newCardBtn.addEventListener('click', () => {
  shapeOfNewCards.open();
  newCardFormValidation.resetValidation();
});
