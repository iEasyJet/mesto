// Объект настроеек
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};

// Объект полей форм
const forms = [
  {
    firstInput: '#popup__input-name',
  },
  {
    secondInput: '#popup__input-job',
  },
  {
    thirdInput: '#popup__input-place',
  },
  {
    fourthInput: '#popup__input-url',
  },
];

class FormValidator {
  constructor(validationConfig) {
    this._validationConfig = validationConfig;
  }

  // Метод активации ошибки ввода
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  // Метод деактивации ошибки ввода
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

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
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      buttonElement.removeAttribute('disabled');
    }
  }

  // Метод проверяет валидность формы
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  // Метод добавления слушателя события всем элементам формы
  _setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(
      formElement.querySelectorAll(this._validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._validationConfig.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  // Метод добавления обработчиков всем формам
  enableValidation() {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(
      document.querySelectorAll(this._validationConfig.formSelector)
    );

    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });

      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      this._setEventListeners(formElement);
    });
  }
}

export { FormValidator };
