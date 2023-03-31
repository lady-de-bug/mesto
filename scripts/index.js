import { initialCards, validationConfig } from './consts.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

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
const closeButtons = document.querySelectorAll('.popup__close-icon');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('click', closePopupByOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('click', closePopupByOverlay);
}

function openProfilePopup() {
  openPopup(profilePopup);
  popupInputName.value = profileUserName.textContent;
  popupInputOccupation.value = profileUserOccupation.textContent;
  profileFormValidation.hideFormErrors();
}

function openPlacePopup() {
  openPopup(placePopup);
  popupPlaceForm.reset();
  disableSubmitButton(submitFormButton, validationConfig);
  placeFormValidation.hideFormErrors();
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupClosedByEsc = document.querySelector('.popup_opened');
    closePopup(popupClosedByEsc);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function createCard(data) {
  const card = new Card(data, '#elementTemplate', handleLargeImageClick);
  return card.generateCard();
}

initialCards.forEach((item) => {
  blockCards.append(createCard(item));
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileUserName.textContent = popupInputName.value;
  profileUserOccupation.textContent = popupInputOccupation.value;
  closePopup(profilePopup);
}
function handleLargeImageClick(place, link) {
  popupLargeImage.src = link;
  popupLargeImage.alt = place;
  popupImageCaption.textContent = place;
  openPopup(imagePopup);
}

function handlePlaceFormSubmit(event) {
  event.preventDefault();
  const name = popupInputPlace.value;
  const link = popupInputLink.value;
  blockCards.prepend(createCard({ name, link }));
  closePopup(placePopup);
  popupPlaceForm.reset();
}

function disableSubmitButton(submitButton, config) {
  submitButton.classList.add(config.inactiveButtonClass);
  submitButton.disabled = true;
}
editProfileButton.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);
profileAddButton.addEventListener('click', openPlacePopup);

const profileFormValidation = new FormValidator(validationConfig, profileForm);
profileFormValidation.enableValidation();
const placeFormValidation = new FormValidator(validationConfig, popupPlaceForm);
placeFormValidation.enableValidation();
