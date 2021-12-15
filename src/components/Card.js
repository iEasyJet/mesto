class Card {
  constructor(
    name,
    link,
    settingsObject,
    userId,
    cardId,
    numLikes,
    { callbackAddLike, callbackDeleteLike }
  ) {
    this._title = name;
    this._linkImg = link;
    this._template = settingsObject.template;
    this._like = settingsObject.like;
    this._delete = settingsObject.delete;
    this._img = settingsObject.img;
    this._titleCard = settingsObject.title;
    this._handleCardClick = settingsObject.function;
    this._handleDeleteCard = settingsObject.secondFun;
    this._id = settingsObject.id;
    this._likeCounter = settingsObject.likeCounter;
    this._userId = userId;
    this._cardId = cardId;
    this._api = settingsObject.api;
    this._callbackAddLike = callbackAddLike;
    this._callbackDeleteLike = callbackDeleteLike;
    this._numLikes = numLikes;
  }

  // Метод клонирования template-заготовки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector('.card__item')
      .cloneNode(true);

    return cardElement;
  }

  // Метод проставления лайка
  addLike() {
    this._elementLike.classList.add('card__like_active');
  }

  // Счетчик лайков
  countLike(number) {
    this._elementLikes.textContent = number;
  }

  // Метод удаления лайка
  deleteLike() {
    this._elementLike.classList.remove('card__like_active');
  }

  // Метод удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  // Метод всех слушателей
  _setEventListeners() {
    // Слушатель на лайк
    this._elementLike.addEventListener('click', () => {
      if (this._elementLike.className.includes('card__like_active')) {
        this.deleteLike();
        this._callbackDeleteLike();
      } else {
        this.addLike();
        this._callbackAddLike();
      }
    });

    // Слушатель на открытие попапа на удаление
    this._elementDelete.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId, () => {
        this._deleteCard();
      });
    });

    // Слушатель на открытие большой картинки
    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._title, this._linkImg);
    });
  }

  // Метод генерации карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector(this._like);
    this._elementDelete = this._element.querySelector(this._delete);
    this._elementImg = this._element.querySelector(this._img);
    this._elementTitle = this._element.querySelector(this._titleCard);
    this._elementLikes = this._element.querySelector(this._likeCounter);

    if (this._id !== this._userId) {
      this._element.querySelector(this._delete).remove();
    }

    this._numLikes.forEach((el) => {
      if (el._id === this._id) {
        this.addLike();
      }
    });

    this._setEventListeners();

    this._elementImg.src = this._linkImg;
    this._elementImg.alt = this._linkImg;
    this._elementTitle.textContent = this._title;
    this._elementLikes.textContent = this._numLikes.length;

    return this._element;
  }
}

export { Card };
