import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// Находим template
const template = document.querySelector('#card').content;
// Находим название карточки
const nameCard = template.querySelector('.card__title');
// Находим картинку карточки
const imgCard = template.querySelector('.card__img');

// Находим место добавления карточек в HTML
const cardsContainer = document.querySelector('.card');

// Находим секцию profile
const profile = document.querySelector('.profile');
// Находим кнопку редактирования
const editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
const profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
const profileJob = profile.querySelector('.profile__name-job');

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
// Кнопка отправки формы
const popupProfileSubmit = formElementPopup.querySelector('.popup__btn');

// Находим кнопку добавления картинок для popup-img
const newCardBtn = profile.querySelector('.profile__btn');
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
// Кнопка отправки формы для создания карточки
const popupImgSubmit = formElementImg.querySelector('.popup__btn');

// Находим popup-pic
const popupPic = document.querySelector('.popup_type_pic');
// Находим закрытие popup-pic
const popupPicClose = popupPic.querySelector('.popup__close');
// Находим popup-pic__title
const popupPicTitle = popupPic.querySelector('.popup__pic-title');
// Находим popup-pic__expand
const popupPicExpand = popupPic.querySelector('.popup__pic-expand');
// Находим лайк на карточке
const cardLike = template.querySelector('.card__like');

// Функция закрытия попапов по клавише ESC
function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Добавляем новый класс для отображения/закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleESC);
}

// Удаляем новый класс  для скрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleESC);
}

// Функция для копирования значения в value popup
function openPopupEditProfile() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
  const editProfile = new FormValidator(validationConfig);
  editProfile._toggleButtonState(popupProfileInputs, popupProfileSubmit);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleNewUserName(evt) {
  evt.preventDefault();

  // Вставляем новые значения в разметку
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Функция закрытия попапа по оверлею
function closeOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}

// Открытие popup-img
newCardBtn.addEventListener('click', () => {
  openPopup(popupImg);
  const formImg = new FormValidator(validationConfig);
  formImg._toggleButtonState(imgInputs, popupImgSubmit);
});

// Закрытие popup-img
popupSkipBtnImg.addEventListener('click', () => closePopup(popupImg));

// Прикрепляем обработчик к форме:
formElementPopup.addEventListener('submit', handleNewUserName);

// Открытие popup
editBtn.addEventListener('click', openPopupEditProfile);

// Закрытие popup
popupSkipBtn.addEventListener('click', () => closePopup(popupEditProfile));

// Закрытие попапов по оверлею
popupEditProfile.addEventListener('click', closeOnOverlay);
popupImg.addEventListener('click', closeOnOverlay);
popupPic.addEventListener('click', closeOnOverlay);

// Добавляем массив карточек
initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link, '#card');
  const cardElement = card.generateCard();

  document.querySelector('.card').prepend(cardElement);
});

// Добавление новых карточек
formElementImg.addEventListener('submit', () => {
  const card = new Card(nameImgInput.value, linkImgInput.value, '#card');
  const cardElement = card.generateCard();

  document.querySelector('.card').prepend(cardElement);

  // Закрываем форму после создания карточки
  closePopup(popupImg);

  // Очищаем поля формы
  nameImgInput.value = '';
  linkImgInput.value = '';
});

// Вызовем функцию валидации
forms.forEach((item) => {
  const form = new FormValidator(validationConfig);
  const formElement = form.enableValidation(item);
  return formElement;
});
