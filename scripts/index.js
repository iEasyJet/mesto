import { Card } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js';
import { initialCards } from './initial-сards.js';

// Находим секцию profile
const profile = document.querySelector('.profile');
// Находим кнопку редактирования
const editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
const profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
const profileJob = profile.querySelector('.profile__name-job');
// Находим кнопку добавления картинок для popup-img
const newCardBtn = profile.querySelector('.profile__btn');

// Находим popup
const popupEditProfile = document.querySelector('.popup_type_profile');
// Находим кнопку закрытия popup
const popupSkipBtn = popupEditProfile.querySelector('.popup__close');
// Находим форму popup
const formElementPopup = popupEditProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElementPopup.querySelector('.popup__input_type_name');
const jobInput = formElementPopup.querySelector('.popup__input_type_job');
// Массив инпутов формы профиля
const popupProfileInputs = [nameInput, jobInput];

// Находим popup-img
const popupImg = document.querySelector('.popup_type_card');
// Находим кнопку закрытия popup-img
const popupSkipBtnImg = popupImg.querySelector('.popup__close');
// Находим форму в DOM popup-img
const formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
const nameImgInput = formElementImg.querySelector(
  '.popup__input_type_name-img'
);
const linkImgInput = formElementImg.querySelector(
  '.popup__input_type_link-img'
);
// Массив инпутов формы создания карточки
const imgInputs = [nameImgInput, linkImgInput];

// Находим popup-pic
const popupPic = document.querySelector('.popup_type_pic');
// Находим закрытие popup-pic
const popupPicClose = popupPic.querySelector('.popup__close');
// Находим popup-pic__title
const popupPicTitle = popupPic.querySelector('.popup__pic-title');
// Находим popup-pic__expand
const popupPicExpand = popupPic.querySelector('.popup__pic-expand');

// Место добавления карточек
const cardsContainer = document.querySelector('.card');

// Функция закрытия попапов по клавише ESC
function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Функция закрытия попапа по оверлею
function closeOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}

// Добавляем новый класс для отображения/закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleESC);
  popup.addEventListener('click', closeOnOverlay);
}

// Удаляем новый класс  для скрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleESC);
  popup.removeEventListener('click', closeOnOverlay);
}

// Функция для копирования значения в value popup
function openPopupEditProfile() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
}

formElementPopup.addEventListener('submit', handleNewUserName);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleNewUserName(evt) {
  evt.preventDefault();

  // Вставляем новые значения в разметку
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

const handleCardClick = (name, link) => {
  openPopup(popupPic);
  popupPicTitle.textContent = name;
  popupPicExpand.src = link;
};

// Объект настроеек для создания карточки
const settingsObject = {
  template: '#card',
  like: '.card__like',
  delete: '.card__delete',
  img: '.card__img',
  title: '.card__title',
  handleCard: handleCardClick,
};

// Функция создания карточки
function createCard(name, link, settingsObject) {
  const card = new Card(name, link, settingsObject);
  const cardElement = card.generateCard();
  return cardElement;
}

// Функция добавления карточки на страницу
function addCard(item) {
  cardsContainer.prepend(item);
}

// Добавляем массив карточек
initialCards.forEach(function (item) {
  addCard(createCard(item.name, item.link, settingsObject));
});

// Добавление новых карточек
formElementImg.addEventListener('submit', () => {
  addCard(createCard(nameImgInput.value, linkImgInput.value, settingsObject));

  // Закрываем форму после создания карточки
  closePopup(popupImg);

  // Очищаем поля формы
  nameImgInput.value = '';
  linkImgInput.value = '';
});

// Включаем валидацию на первую форму
const firstFormValidation = new FormValidator(
  validationConfig,
  formElementPopup
);
firstFormValidation.enableValidation();

// Включаем валидацию на вторую форму
const secondFormValidation = new FormValidator(
  validationConfig,
  formElementImg
);
secondFormValidation.enableValidation();

// Слушатель на закрытие большой картинки по крестику
popupPicClose.addEventListener('click', () => {
  closePopup(popupPic);
});

// Открытие/Закрытие профиля
editBtn.addEventListener('click', () => {
  openPopupEditProfile();
  firstFormValidation.resetValidation(popupProfileInputs);
});
popupSkipBtn.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

// Открытие/Закрытие формы новой карточки
newCardBtn.addEventListener('click', () => {
  openPopup(popupImg);
  secondFormValidation.resetValidation(imgInputs);
});
popupSkipBtnImg.addEventListener('click', () => {
  closePopup(popupImg);
});
