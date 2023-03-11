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

const hideInputError = (errorElement, errorClass) => {
  errorElement.classList.remove(errorClass);
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
  console.log(errorElement);
  if (input.validity.valid) {
    hideInputError(errorElement);
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

const setEventListeners = (
  config,
  formList,
  // inputList,
  errorClassTemplate,
  inputErrorClass,
  errorClass
) => {
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(
          input,
          errorClassTemplate,
          inputErrorClass,
          errorClass
        );
      });
    });
  });

};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  setEventListeners(
    config,
    formList,
    // inputList,
    config.errorClassTemplate,
    config.inputErrorClass,
    config.errorClass
  );
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',

  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
});
