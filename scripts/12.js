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

/*   // Метод активации ошибки ввода
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }
 */
/*   // Метод деактивации ошибки ввода
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = '';
  } */

/*   _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  } */

/*   // Метод смены активации/деактивации кнопки
  toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      buttonElement.removeAttribute('disabled');
    }
  } */

  // Метод проверяет валидность формы
 /*  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  } */

  // Метод добавления слушателя события всем элементам формы
  //_setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    //const inputList = Array.from(
      //formElement.querySelectorAll(this._validationConfig.inputSelector)
    //);
    //const buttonElement = formElement.querySelector(
      //this._validationConfig.submitButtonSelector
    //);

    //this.toggleButtonState(inputList, buttonElement);
    // Обойдём все элементы полученной коллекции
    //inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      //inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        //this._checkInputValidity(formElement, inputElement);
        //this.toggleButtonState(inputList, buttonElement);
      //});
    //});
  //};

  // Метод добавления обработчиков всем формам
/*   enableValidation() {
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
  } */
}

export { validationConfig, forms, FormValidator };









































// Объект настроеек
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};

/* // Находим форму popup
const formElementPopup = popupEditProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElementPopup.querySelector('.popup__input_type_name');
const jobInput = formElementPopup.querySelector('.popup__input_type_job');
// Кнопка отправки формы
const popupProfileSubmit = formElementPopup.querySelector('.popup__btn');

// Находим форму в DOM popup-img
const formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
const nameImgInput = formElementImg.querySelector(
  '.popup__input_type_name-img'
);
const linkImgInput = formElementImg.querySelector(
  '.popup__input_type_link-img'
);
// Кнопка отправки формы для создания карточки
const popupImgSubmit = formElementImg.querySelector('.popup__btn'); */

/* // Объект форм и инпутов
const forms = [
  {
    firstForm: formElementPopup,
  },
  {
    firstInput: nameInput,
  },
  {
    secondInput: jobInput,
  },
  {
    firstSubmit: popupProfileSubmit,
  },
  {
    secondForm: formElementImg,
  },
  {
    thirdInput: nameImgInput,
  },
  {
    fourthInput: linkImgInput,
  },
  {
    secondSubmit: popupImgSubmit,
  }
]; */

class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    //this._formInputs = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
    //this._formButton = this._form.querySelector(this._validationConfig.submitButtonSelector);
    //const formInputs = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
  }

  // Метод активации ошибки ввода
  _showInputError(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);

    input.classList.add(this._validationConfig.inputErrorClass);
    this._errorElement.textContent = input.validationMessage;
    this._errorElement.classList.add(this._validationConfig.errorClass);
  }

  // Метод деактивации ошибки ввода
  _hideInputError(input) {
    this._errorElement = formElement.querySelector(`.${input.id}-error`);

    input.classList.remove(this._validationConfig.inputErrorClass);
    this._errorElement.classList.remove(this._validationConfig.errorClass);
    this._errorElement.textContent = '';
  }

  // Метод проверяет валидность формы
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput(formInputs) {
    return formInputs.some((el) => {
      return !el.validity.valid;
    });
  }

  // Метод смены активации/деактивации кнопки
  _toggleButtonState(formInputs, formButton) {
    if(this._hasInvalidInput(formInputs)) {
      formButton.classList.add(this._validationConfig.inactiveButtonClass);
      formButton.setAttribute('disabled', 'disabled');
    } else {
      formButton.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      formButton.removeAttribute('disabled');
    }
  }

  // Метод добавления слушателя события всем элементам формы
  _setEventListeners() {
    const formInputs = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
    const formButton = this._form.querySelector(this._validationConfig.submitButtonSelector);
    this._toggleButtonState(formInputs, formButton);
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(formInputs, formButton);
      })
    })
  }



  // Метод добавления обработчиков всем формам
  enableValidation() {

/*     // У формы отключаем стандартное поведение
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    }) */

    // Для формы вызовем функцию setEventListeners
    this._setEventListeners();
    };
  }



export { validationConfig, FormValidator };
