const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
};

// costs from index.js
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Горы Архыза летом.',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Озеро Челябинска зимой.',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Жилой массив состоящий из панельных домов.',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Растительность у подножья горы.',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Железная дорога, бегущая среди полей и  уходящая к горизонту.',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Волны озера омывают скалистый берег.',
  },
];
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_profile');
const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputOccupation = profilePopup.querySelector(
  '.popup__input_type_occupation'
);
const profileUserName = profile.querySelector('.profile__user-name');
const profileUserOccupation = profile.querySelector(
  '.profile__user-occupation'
);
const profileForm = profilePopup.querySelector('.popup__form_type_profile');
const profileAddButton = profile.querySelector('.profile__add-button');
const placePopup = document.querySelector('.popup_type_place');
const popupPlaceForm = placePopup.querySelector('.popup__form_type_place');
const popupInputPlace = popupPlaceForm.querySelector(
  '.popup__input_type_place'
);
const popupInputLink = popupPlaceForm.querySelector('.popup__input_type_link');
const blockCards = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_type_image');
const popupLargeImage = imagePopup.querySelector('.popup__large-image');
const popupImageCaption = imagePopup.querySelector('.popup__image-caption');
const submitFormButton = popupPlaceForm.querySelector('.popup__submit-btn');
const elementTemplate = blockCards.querySelector('#elementTemplate');
const closeButtons = document.querySelectorAll('.popup__close-icon');
