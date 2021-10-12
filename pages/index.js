const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];



// Находим template
const template = document.querySelector('#card').content;
// Находим название карточки
const nameCard = template.querySelector('.card__title');
// Находим картинку карточки
const imgCard = template.querySelector('.card__img');



// Находим место добавления карточек в HTML
const card = document.querySelector('.card');



// Находим секцию profile
const profile = document.querySelector('.profile');
// Находим кнопку редактирования
const editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
const profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
const profileJob = profile.querySelector('.profile__name-job');



// Находим popup
const popup = document.querySelector('.popup-user-profile');
// Находим кнопку закрытия popup
const popupSkipBtn = popup.querySelector('.popup__close');
// Находим форму popup
const formElementPopup = popup.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElementPopup.querySelector('.popup__input_type_name');
const jobInput = formElementPopup.querySelector('.popup__input_type_job');



// Находим кнопку добавления картинок для popup-img
const profileBtn = profile.querySelector('.profile__btn');
// Находим popup-img
const popupImg = document.querySelector('.popup-img');
// Находим кнопку закрытия popup-img
const popupSkipBtnImg = popupImg.querySelector('.popup__close');
// Находим форму в DOM popup-img
const formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
const nameImgInput = formElementImg.querySelector('.popup__input_type_name-img');
const linkImgInput = formElementImg.querySelector('.popup__input_type_link-img');



// Находим popup-pic
const popupPic = document.querySelector('.popup-pic');
// Находим закрытие popup-pic
const popupPicClose = popupPic.querySelector('.popup-pic__close');
// Находим popup-pic__title
const popupPicTitle = popupPic.querySelector('.popup-pic__title');
// Находим popup-pic__expand
const popupPicExpand = popupPic.querySelector('.popup-pic__expand');



// Функция создания содержимого карточки
function createCard(selector, name, link, name) {
  selector.querySelector('.card__title').textContent = name;
  selector.querySelector('.card__img').src = link;
  selector.querySelector('.card__img').alt = name;
};




// Добавляем массив карточек на страницу
initialCards.forEach(function(item) {
  // Клонируем заготовку карточки
  const cardItem = template.querySelector('.card__item').cloneNode(true);
  //selector.querySelector('.card__title').textContent = item.name;
  //selector.querySelector('.card__img').src = item.link;
  //selector.querySelector('.card__img').alt = item.name;

  // Создание содержимого карточки
  createCard(cardItem, item.name, item.link, item.name);


  // Функция развертывания картинки popup-pic
  function openPopupPic() {
    popupPic.classList.add('popup-pic_opened');
    popupPicTitle.textContent = cardItem.querySelector('.card__title').textContent;
    popupPicExpand.src = cardItem.querySelector('.card__img').src;
  };
  // Функция закрытия popup-pic
  function closePopupPic() {
    popupPic.classList.remove('popup-pic_opened');
  };
  // Открытие картинки
  cardItem.querySelector('.card__img').addEventListener('click', openPopupPic)
  // Закрытие картинки
  popupPicClose.addEventListener('click', closePopupPic);



  // Находим лайк на карточке
  const cardLike = cardItem.querySelector('.card__like');
  // Добавление/удаление модификатора лайка
  function addLike() {
    cardLike.classList.toggle('card__like_active');
  };

  function deleteCard() {
    cardItem.remove();
  };

  // Удаление карточки
  cardItem.querySelector('.card__delete').addEventListener('click', deleteCard);
  // Проставление/удаление лайка
  cardLike.addEventListener('click', addLike);

  // Добавление карточки в начало списка
  card.prepend(cardItem);
});




// Добавляем новый класс с display block для отображения popup-img
/* function openPopupImg() {
  popupImg.classList.add('popup_opened');

  //nameImgInput.value = '';
  //linkImgInput.value = '';
};
// Удаляем новый класс с display block для скрытия popup-img
function closePopupImg() {
  popupImg.classList.remove('popup_opened');
};
 */


// Добавляем новый класс для отображения/закрытия popup
function openPopup(popup, selector) {
  popup.classList.add(selector);
};
// Удаляем новый класс  для скрытия popup
function closePopup(popup, selector) {
  popup.classList.remove(selector);
};



// Функция для копирования значения в value popup
function popupValue() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  //openPopup()
  openPopup(popup, 'popup_opened');
  };

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function createNewUserName (evt) {
    evt.preventDefault();

    // Вставьте новые значения в разметку
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup, 'popup_opened');
};


// Функция клонирования значения формы popup-img с функцией удаления, просмотра фото и лайка
function createNewCard (evt) {
  evt.preventDefault();

    const cardItem = template.querySelector('.card__item').cloneNode(true);

   // Создание содержимого карточки
   createCard(cardItem, nameImgInput.value, linkImgInput.value, nameImgInput.value);

    //cardItem.querySelector('.card__title').textContent = nameImgInput.value;
    //cardItem.querySelector('.card__img').src = linkImgInput.value;
    //cardItem.querySelector('.card__img').alt = nameImgInput.value;

    const cardLike = cardItem.querySelector('.card__like');

    // Функция развертывания картинки popup-pic
    function openPopupPic() {
      popupPic.classList.add('popup-pic_opened');
      popupPicTitle.textContent = cardItem.querySelector('.card__title').textContent;
      popupPicExpand.src = cardItem.querySelector('.card__img').src;
    };
    // Функция закрытия popup-pic
    function closePopupPic() {
      popupPic.classList.remove('popup-pic_opened');
    };
    // Открытие картинки
    cardItem.querySelector('.card__img').addEventListener('click', openPopupPic)
    // Закрытие картинки
    popupPicClose.addEventListener('click', closePopupPic);


    function addLike() {
      cardLike.classList.toggle('card__like_active');
    }

    cardLike.addEventListener('click', addLike);

    function deleteCard() {
      cardItem.remove();
    };

    cardItem.querySelector('.card__delete').addEventListener('click', deleteCard);

    card.prepend(cardItem);

    //closePopupImg();
    closePopup(popupImg, 'popup_opened');
};



// Открытие popup-img
profileBtn.addEventListener('click', /*openPopupImg*/() => openPopup(popupImg, 'popup_opened'));

// Закрытие popup-img
popupSkipBtnImg.addEventListener('click', /* closePopupImg */() => closePopup(popupImg, 'popup_opened'));

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementPopup.addEventListener('submit', createNewUserName);

// Открытие popup
editBtn.addEventListener('click', popupValue);

// Закрытие popup
popupSkipBtn.addEventListener('click', /* closePopup */() => closePopup(popup, 'popup_opened'));

// Добавление новых карточек
formElementImg.addEventListener('submit', createNewCard);
