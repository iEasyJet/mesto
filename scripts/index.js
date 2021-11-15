import { Card } from './Card.js';
import { validationConfig, forms, FormValidator } from './FormValidator.js';
import { initialCards } from './initial-сards.js';

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
  formElementPopup.removeEventListener('submit', handleNewUserName);
}

// Функция для копирования значения в value popup
function openPopupEditProfile() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  formElementPopup.addEventListener('submit', handleNewUserName);

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

// Ставим слушатель на весь документ для отслеживания кликов
// на открытие и закрытие всех типов попапов через event.target
document.addEventListener('click', (e) => {

  // Увеличение картинки карточки
  if (e.target.className === 'card__img') {
    openPopup(popupPic);

    popupPicTitle.textContent =
      e.target.parentElement.querySelector('.card__name').textContent;
    popupPicExpand.src = e.target.parentElement.querySelector('.card__img').src;

    popupPicClose.addEventListener('click', () => {
      closePopup(popupPic);
      popupPicClose.removeEventListener('click', () => {
        closePopup(popupPic);
      });
    });
  }

  // Открытие формы профиля изменения имени и работы
  if (e.target.className === 'profile__edit-btn') {
    openPopupEditProfile();

    popupSkipBtn.addEventListener('click', () => {
      closePopup(popupEditProfile);
      popupSkipBtn.removeEventListener('click', () =>
        closePopup(popupEditProfile)
      );
    });
  }

  // Открытие формы создания новой карточки
  if (e.target.className === 'profile__btn') {
    openPopup(popupImg);
    const formImg = new FormValidator(validationConfig);
    formImg._toggleButtonState(imgInputs, popupImgSubmit);

    // Закрытие popup-img
    popupSkipBtnImg.addEventListener('click', () => {
      closePopup(popupImg);
      popupSkipBtnImg.removeEventListener('click', () => {
        closePopup(popupImg);
      });
    });
  }
});
