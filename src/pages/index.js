import './index.css';
import { FormValidator } from '../components/FormValidator.js';
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
  popupPic,
  popupDeleteConfirmation,
  popupChangeAvatar,
  configdApi,
  popupAvatarLink,
  formChangeAvatar,
} from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
import { PopupUpdateAvatar } from '../components/PopupUpdateAvatar.js';
import { Api } from '../components/Api.js';

// Иницилизация апи
export const api = new Api(configdApi);

// Проставление информации о пользователе
api.getUserUnfo().then((res) => {
  userInfo.setUserInfo(res);
  popupUpdateAvatar.setUserAvatar(res.avatar);
});

// Иницилизация класса смены аватара
const popupUpdateAvatar = new PopupUpdateAvatar(popupChangeAvatar, {
  submitEvent: () => {
    popupChangeAvatar.addEventListener('submit', () => {
      updateAvatarValidation.changeButtonName('Сохранение...');
      api
        .changeUserAvatar(popupAvatarLink.value)
        .then((res) => {
          popupUpdateAvatar.setUserAvatar(res.avatar);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          updateAvatarValidation.changeButtonName('Сохранить');
        });
      formChangeAvatar.reset();
      popupUpdateAvatar.close();
      updateAvatarValidation.resetValidation();
    });
  },
});

// Слушатель на открытие попапа аватара
popupUpdateAvatar.openPopup({
  validation: () => {
    updateAvatarValidation.resetValidation();
  },
});

// Удаление карточки
const popupDeleteCard = new PopupDeleteCard(popupDeleteConfirmation);
export function handleDeleteCard(deleteCard, aaa) {
  popupDeleteCard.open();
  popupDeleteCard.setEventListeners();
  api.deleteCard(deleteCard).then(() => {
    popupDeleteCard.deleteCard(aaa);
  });
}

// Функция открытия большой картинки
const popupWithImage = new PopupWithImage(popupPic);
export function handleCardClick(name, src) {
  popupWithImage.open(name, src);
  popupWithImage.setEventListeners();
}

// Данные профиля
const userInfo = new UserInfo(profileSettings);
const profilePopup = new PopupWithForm(popupEditProfile, {
  submitEvent: (formValues) => {
    profileEditFormValidation.changeButtonName('Сохранение...');
    const { name: userName, job: userJob } = formValues;
    api
      .changeUserInfo(userName, userJob)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        profileEditFormValidation.changeButtonName('Сохранить');
      });
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

// Валидация формы смены автара
const updateAvatarValidation = new FormValidator(
  validationConfig,
  formChangeAvatar
);
updateAvatarValidation.enableValidation();

// Добавляем массив карточек на страницу
api.getInitalCards().then((res) => {
  newSection(res);
});

// Добавление новых карточек
const shapeOfNewCards = new PopupWithForm(popupImg, {
  submitEvent: (formValues) => {
    newCardFormValidation.changeButtonName('Загрузка...');
    // Вкладываем объект formValues в массив newCard
    const newCard = { name: formValues.nameImg, link: formValues.linkImg };
    api
      .addNewCard(newCard)
      .then((res) => {
        const newCard = [
          {
            name: res.name,
            link: res.link,
            owner: { _id: res.owner._id },
            _id: res._id,
            likes: res.likes.length,
          },
        ];
        newSection(newCard);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        newCardFormValidation.changeButtonName('Создать');
      });
  },
});

// Добавление слушателей на закрытие
shapeOfNewCards.setEventListeners();

// Слушатель на открытие попапа новых карточек
newCardBtn.addEventListener('click', () => {
  shapeOfNewCards.open();
  newCardFormValidation.resetValidation();
});
