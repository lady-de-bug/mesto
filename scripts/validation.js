const showInputError = (
  input,
  errorElement,
  validationMessage,
  inputErrorClass,
  errorClass
) => {
  errorElement.textContent = validationMessage;
  input.classList.add(inputErrorClass);

  errorElement.classList.add(errorClass);
};

const hideInputError = (input, errorElement, inputErrorClass, errorClass) => {
  errorElement.textContent = '';
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
};

const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

const checkInputValidity = (
  input,
  errorClassTemplate,
  inputErrorClass,
  errorClass
) => {
  const errorElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );
  if (input.validity.valid) {
    hideInputError(input, errorElement, inputErrorClass, errorClass);
  } else {
    showInputError(
      input,
      errorElement,
      input.validationMessage,
      inputErrorClass,
      errorClass
    );
  }
};

const hasInvalidInput = (inputList) => {
  // console.log(inputList);
  return inputList.some((input) => !input.validity.valid);
};

const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, inactiveButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass);
  }
};

const setEventListeners = (
  config,
  formList,
  errorClassTemplate,
  inputErrorClass,
  errorClass,
  inactiveButtonClass
) => {
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(
          input,
          errorClassTemplate,
          inputErrorClass,
          errorClass
        );
        toggleButtonState(submitButton, inactiveButtonClass, inputList);
      });
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  setEventListeners(
    config,
    formList,
    config.errorClassTemplate,
    config.inputErrorClass,
    config.errorClass,
    config.inactiveButtonClass
  );
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
};
enableValidation(validationConfig);
