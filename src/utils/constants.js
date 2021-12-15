import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import {
  handleCardClick,
  handleDeleteCard,
  api,
  userId,
} from '../pages/index.js';

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
export const nameInput = formElementPopup.querySelector(
  '.popup__input_type_name'
);
export const jobInput = formElementPopup.querySelector(
  '.popup__input_type_job'
);

// Находим popup-img
export const popupImg = document.querySelector('.popup_type_card');
// Находим форму в DOM popup-img
export const formElementImg = popupImg.querySelector('.popup__form');
// Находим popup-pic
export const popupPic = document.querySelector('.popup_type_pic');

// Контейнер карточек
export const cardListSelector = '.card';

// Попап подтверждения удаления карточки
export const popupDeleteConfirmation = document.querySelector(
  '.popup_type_delete-card'
);
// Попап изменения аватара
export const popupChangeAvatar = document.querySelector(
  '.popup_type_new-avatar'
);
export const formChangeAvatar = popupChangeAvatar.querySelector(
  '.popup__form_update_avatar'
);
export const popupAvatarLink = popupChangeAvatar.querySelector('.popup__input');

// Объект настроек для профиля
export const profileSettings = {
  nameProfile: '.profile__name-user',
  jobProfile: '.profile__name-job',
  popupChangeAvatar: popupChangeAvatar,
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
  id: '32552929d6c636d73b975107',
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

// Функция генерации новой карточки
export const createCard = (data, cardList) => {
  const card = new Card(
    data.name,
    data.link,
    settingsObject,
    data.owner._id,
    data._id,
    data.likes,
    {
      callbackAddLike: () => {
        api
          .addLike(data._id)
          .then((res) => {
            card.addLike(res.likes.length);
            card.countLike(res.likes.length);
          })
          .catch((err) => console.log(err));
      },
      callbackDeleteLike: () => {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.deleteLike(res.likes.length);
            card.countLike(res.likes.length);
          })
          .catch((err) => console.log(err));
      },
    }
  );

  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

/// Новая секция
export const newSection = (data) => {
  const cardList = new Section(
    {
      items: data,
      renderer: (data) => {
        createCard(data, cardList);
      },
    },
    cardListSelector
  );
  cardList.renderItems();
};

// Новые значения профиля
export const newProfileValue = (data) => {
  nameInput.value = data.name;
  jobInput.value = data.job;
};
