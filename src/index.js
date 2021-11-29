import './pages/index.css';
import { Card } from './components/Card.js';
import {
  validationConfig,
  FormValidator,
} from './components/FormValidator.js';
import { initialCards } from './utils/initial-сards.js';
import { Section } from './components/Section.js';
import { Popup } from './components/Popup.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import {
  editBtn,
  newCardBtn,
  popupEditProfile,
  formElementPopup,
  popupImg,
  formElementImg,
  popupPic,
  cardListSelector,
  profileSettings,
  settingsObject,
} from './utils/constants.js';

// Данные профиля
const profilePopup = new Popup(popupEditProfile);
const userInfo = new UserInfo(profileSettings);

// Слушатели на закрытие
profilePopup.setEventListeners();

// Сабмит формы профиля
formElementPopup.addEventListener('submit', () => {
  userInfo.addMarkup();
  profilePopup.close();
});

// Слушатель на открытие профиля
editBtn.addEventListener('click', () => {
  profilePopup.open();
  userInfo.addForm();
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
      const card = new Card(item.name, item.link, settingsObject);

      const popupWithImage = new Popup(popupPic);
      popupWithImage.setEventListeners();

      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
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
          const card = new Card(nameImg, linkImg, settingsObject);

          const popupWithImage = new Popup(popupPic);
          popupWithImage.setEventListeners();

          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      cardListSelector
    );
    cardList.renderItem();
  },
});

// Добавление слушателей на закрытие
shapeOfNewCards.setEventListeners();

// Слушатель сабмита на новую карточку
popupImg.addEventListener('submit', () => {
  shapeOfNewCards.callBack();
  formElementImg.reset();
});

// Слушатель на открытие попапа новых карточек
newCardBtn.addEventListener('click', () => {
  shapeOfNewCards.open();
  newCardFormValidation.resetValidation()
});
