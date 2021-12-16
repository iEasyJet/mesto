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
  popupPic,
  popupDeleteConfirmation,
  popupChangeAvatar,
  configdApi,
  popupAvatarLink,
  formChangeAvatar,
  cardListSelector,
  settingsObject,
  nameInput,
  jobInput,
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
import { Api } from '../components/Api.js';

/////////////////* Иницилизация классов */////////////////

// Иницилизация апи
export const api = new Api(configdApi);

// Класс информации пользователя
const userInfo = new UserInfo(profileSettings);

// Добавление класса секции
const cardList = new Section(cardListSelector);

// Класс большой картинки
const popupWithImage = new PopupWithImage(popupPic);
popupWithImage.setEventListeners();

// Подтверждение удаления карточки
const popupDeleteCard = new PopupDeleteCard(popupDeleteConfirmation);
popupDeleteCard.setEventListeners();

// Иницилизация класса смены аватара
const popupUpdateAvatar = new PopupWithForm(popupChangeAvatar, {
  submitEvent: () => {
    formChangeAvatar.addEventListener('submit', () => {
      popupUpdateAvatar.changeButtonName('Сохранение...');
      api
        .changeUserAvatar(popupAvatarLink.value)
        .then((res) => {
          userInfo.setUserAvatar(res);
          popupUpdateAvatar.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          popupUpdateAvatar.changeButtonName('Сохранить');
        });
    });
  },
});

popupUpdateAvatar.setEventListenersForAvatar();

// Слушатель на открытие попапа аватара
popupUpdateAvatar.openPopup({
  validation: () => {
    updateAvatarValidation.resetValidation();
  },
});

// Добавление новых карточек
const shapeOfNewCards = new PopupWithForm(popupImg, {
  submitEvent: (formValues) => {
    shapeOfNewCards.changeButtonName('Загрузка...');
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
            likes: res.likes,
          },
        ];
        newSection(newCard, userInfo.giveUserId());
        shapeOfNewCards.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        shapeOfNewCards.changeButtonName('Создать');
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

// Функция открытия большой картинки
export function handleCardClick(name, src) {
  popupWithImage.open(name, src);
}

// Класс попапа профиля
const profilePopup = new PopupWithForm(popupEditProfile, {
  submitEvent: (formValues) => {
    profilePopup.changeButtonName('Сохранение...');
    const { name: userName, job: userJob } = formValues;
    api
      .changeUserInfo(userName, userJob)
      .then((res) => {
        userInfo.setUserInfo(res);
        profilePopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        profilePopup.changeButtonName('Сохранить');
      });
    profilePopup.close();
  },
});

// Слушатели на закрытие и сабмит формы профиля
profilePopup.setEventListeners();

// Слушатель на открытие профиля
editBtn.addEventListener('click', () => {
  profilePopup.open();
  setNewProfileValues(userInfo.getUserInfo());
  profileEditFormValidation.resetValidation();
});

/////////////////* Валидация */////////////////

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

/////////////////* Функции */////////////////

//Фукнция подтверждения удаления
export function handleDeleteCard(id, card) {
  popupDeleteCard.open();
  popupDeleteCard.setNewSubmit(() => {
    deleteConfirmation(id, card);
  });
}

// Фукнция удаления с сервера
function deleteConfirmation(id, card) {
  api
    .deleteCard(id)
    .then(() => {
      card._deleteCard();
      popupDeleteCard.close();
    })
    .catch((err) => console.log(err));
}

// Новые значения профиля
const setNewProfileValues = (data) => {
  nameInput.value = data.name;
  jobInput.value = data.job;
};

/// Новая секция
const newSection = (data, id) => {
  cardList.renderItems({
    items: data,
    renderer: (data) => {
      createCard(data, cardList, id);
    },
  });
};

// Функция генерации новой карточки
const createCard = (data, cardList, id) => {
  const card = new Card(
    data.name,
    data.link,
    settingsObject,
    data.owner._id,
    data._id,
    data.likes,
    id,
    {
      callbackAddLike: () => {
        api
          .addLike(data._id)
          .then((res) => {
            card.addLike();
            card.countLike(res.likes.length);
          })
          .catch((err) => console.log(err));
      },
      callbackDeleteLike: () => {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.deleteLike();
            card.countLike(res.likes.length);
          })
          .catch((err) => console.log(err));
      },
    }
  );

  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

/////////////////* Подгрузка информации с сервера */////////////////
Promise.all([
  // Получение информации пользователя
  api.getUserUnfo(),
  // Получение информации карточек
  api.getInitalCards(),
])
  .then((res) => {
    userInfo.setUserInfo(res[0]);
    userInfo.setUserAvatar(res[0]);
    userInfo.getUserId(res[0]);

    newSection(res[1], userInfo.giveUserId());
  })
  .catch((err) => {
    console.log(err);
  });
