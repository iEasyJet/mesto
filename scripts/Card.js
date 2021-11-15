class Card {
  constructor(name, link, template) {
    this._title = name;
    this._linkImg = link;
    this._template = template;
  }

  // Метод клонирования template-заготовки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector('.card__item')
      .cloneNode(true);

    return cardElement;
  }

  // Метод проставления/удаления лайка
  _addLike() {
    this._element
      .querySelector('.card__like')
      .classList.toggle('card__like_active');
  }

  // Метод удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  // Метод всех слушателей
  _setEventListeners() {
    // Слушатель на лайк
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._addLike();
    });

    // Слушатель на удаление
    this._element
      .querySelector('.card__delete')
      .addEventListener('click', () => {
        this._deleteCard();
      });
  }

  // Метод генерации карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__img').src = this._linkImg;
    this._element.querySelector('.card__img').alt = this._linkImg;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }
}

export { Card };
