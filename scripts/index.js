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

function createCard(place, link) {
  const newElement = elementTemplate.content.cloneNode(true);
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

function disableSubmitButton(submitFormButton, config) {
  submitFormButton.classList.add(config.inactiveButtonClass);
  submitFormButton.disabled = true;
}
editProfileButton.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
popupPlaceForm.addEventListener('submit', handlePlaceFormSubmit);
profileAddButton.addEventListener('click', (evt) => {
  openPlacePopup(placePopup);
  disableSubmitButton(submitFormButton, validationConfig);
});


