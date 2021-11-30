import './index.css';
import { validationConfig, FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  editBtn,
  newCardBtn,
  popupEditProfile,
  formElementPopup,
  popupImg,
  formElementImg,
  cardListSelector,
  profileSettings,
  createCard,
} from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage';

// Данные профиля
const profilePopup = new PopupWithImage(popupEditProfile);
const userInfo = new UserInfo(profileSettings);

// Слушатели на закрытие
profilePopup.setEventListeners();

// Сабмит формы профиля
formElementPopup.addEventListener('submit', () => {
  userInfo.setUserInfo();
  profilePopup.close();
});

// Слушатель на открытие профиля
editBtn.addEventListener('click', () => {
  profilePopup.open('', '');
  userInfo.getUserInfo();
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
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item.name, item.link, cardList);
    },
  },
  cardListSelector
);

cardList.renderItems();

// Добавление новых карточек
const shapeOfNewCards = new PopupWithForm(popupImg, {
  callBack: () => {
    const obj = shapeOfNewCards.getInputValues();
    const nameImg = obj.nameImg;
    const linkImg = obj.linkImg;
    const cardList = new Section(
      {
        items: obj,
        renderer: () => {
          createCard(nameImg, linkImg, cardList);
        },
      },
      cardListSelector
    );
    cardList.renderItem();
  },
});

// Добавление слушателей на закрытие
shapeOfNewCards.setEventListeners();

// Слушатель на открытие попапа новых карточек
newCardBtn.addEventListener('click', () => {
  shapeOfNewCards.open();
  newCardFormValidation.resetValidation();
});
