// Объект настроеек
const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};

class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    this._button = this._form.querySelector(
      this._validationConfig.submitButtonSelector
    );
  }

  // Ресет ошибок инпутов
  resetValidation(inputList) {
    this.toggleButtonState(inputList);

    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
  // Метод активации ошибки ввода
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  // Метод деактивации ошибки ввода
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Метод смены активации/деактивации кнопки
  toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._button.classList.add(this._validationConfig.inactiveButtonClass);
      this._button.setAttribute('disabled', 'disabled');
    } else {
      this._button.classList.remove(this._validationConfig.inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }

  // Метод проверяет валидность формы
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Метод добавления слушателя события всем элементам формы
  _setEventListeners = () => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(
      this._form.querySelectorAll(this._validationConfig.inputSelector)
    );
    this.toggleButtonState(inputList);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._checkInputValidity(inputElement);
        this.toggleButtonState(inputList);
      });
    });
  };

  // Метод добавления обработчиков всем формам
  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export { validationConfig, FormValidator };
