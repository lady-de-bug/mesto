export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
};

// export const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//     alt: 'Горы Архыза летом.',
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
//     alt: 'Озеро Челябинска зимой.',
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
//     alt: 'Жилой массив состоящий из панельных домов.',
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
//     alt: 'Растительность у подножья горы.',
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
//     alt: 'Железная дорога, бегущая среди полей и  уходящая к горизонту.',
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
//     alt: 'Волны озера омывают скалистый берег.',
//   },
// ];
const profile = document.querySelector('.profile');
export const editProfileButton = profile.querySelector('.profile__edit-button');
export const placePopup = document.querySelector('.popup_type_place');
export const popupPlaceForm = placePopup.querySelector(
  '.popup__form_type_place'
);
const profilePopup = document.querySelector('.popup_type_profile');
export const profileForm = profilePopup.querySelector(
  '.popup__form_type_profile'
);
export const newPlacePopupAddButton = profile.querySelector(
  '.profile__add-button'
);
export const popupInputName = profilePopup.querySelector(
  '.popup__input_type_name'
);
export const popupInputOccupation = profilePopup.querySelector(
  '.popup__input_type_occupation'
);
export const popupEditAvatar = document.querySelector('.popup_type_avatar');
export const avatarForm = popupEditAvatar.querySelector(
  '.popup__form_type_avatar'
);
export const editAvatarButton = document.querySelector(
  '.profile__avatar-button'
);
export const avatar = document.querySelector('.profile__avatar');
