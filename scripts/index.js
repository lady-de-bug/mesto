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
const profileСloseButton = profilePopup.querySelector(
  '.popup__close-icon_type_profile'
);
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
const placeCloseButton = placePopup.querySelector(
  '.popup__close-icon_type_place'
);
const popupPlaceForm = placePopup.querySelector('.popup__form_type_place');
const popupInputPlace = popupPlaceForm.querySelector(
  '.popup__input_type_place'
);
const popupInputLink = popupPlaceForm.querySelector('.popup__input_type_link');
const blockCards = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_type_image');
const popupLargeImage = imagePopup.querySelector('.popup__large-image');
const popupImageCaption = imagePopup.querySelector('.popup__image-caption');
const imageCloseButton = imagePopup.querySelector(
  '.popup__close-icon_type_image'
);
const submitFormButton = popupPlaceForm.querySelector('.popup__submit-btn');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  }
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
  openPopup(profilePopup);
  popupInputName.value = profileUserName.textContent;
  popupInputOccupation.value = profileUserOccupation.textContent;
  }

function closeProfilePopup() {
  closePopup(profilePopup);
}
function openPlacePopup(placePopup) {
  openPopup(placePopup);
}
function closePlacePopup() {
  closePopup(placePopup);
  popupPlaceForm.reset();
}
function closeImagePopup() {
  closePopup(imagePopup);
}

function createCard(place, link) {
  const newElement = blockCards
    .querySelector('#elementTemplate')
    .content.cloneNode(true);
  const elementImage = newElement.querySelector('.element__image');
  const elementNamePlace = newElement.querySelector('.element__name-place');
  elementNamePlace.textContent = place;
  elementImage.setAttribute('src', link);
  elementImage.setAttribute('alt', place);
  const elementPlaceLike = newElement.querySelector('.element__place-like');
  elementPlaceLike.addEventListener('click', handleLikeButtonClick);
  const elementTrashIcon = newElement.querySelector('.element__trash-icon');
  elementTrashIcon.addEventListener('click', handleDeleteButtonClick);
  elementImage.addEventListener('click', () =>
    handleLargeImageClick(place, link)
  );
  return newElement;
}

initialCards.forEach(function (item) {
  blockCards.append(createCard(item.name, item.link, item.alt));
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
function handleLikeButtonClick(event) {
  event.target.classList.toggle('element__place-like_active');
}
function handleDeleteButtonClick(event) {
  const deleteButton = event.target;
  const targetCard = deleteButton.closest('.element');
  targetCard.remove();
}
function handlePlaceFormSubmit(event) {
  event.preventDefault();
  const placeName = popupInputPlace.value;
  const link = popupInputLink.value;
  blockCards.prepend(createCard(placeName, link));
  closePopup(placePopup);
  popupPlaceForm.reset();
}

function preventSubmit(submitFormButton, config) {
  submitFormButton.classList.add(config.inactiveButtonClass);
  submitFormButton.disabled = true;
}

editProfileButton.addEventListener('click', openProfilePopup);
profileСloseButton.addEventListener('click', closeProfilePopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

profileAddButton.addEventListener('click', (evt) => {
  openPlacePopup(placePopup);
  preventSubmit(submitFormButton, validationConfig);
});

placeCloseButton.addEventListener('click', closePlacePopup);
imageCloseButton.addEventListener('click', closeImagePopup);
