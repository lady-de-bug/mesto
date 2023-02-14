let profile = document.querySelector(".profile");
let editProfileButton = profile.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupСloseIcon = popup.querySelector(".popup__close-icon");
let popupInputName = popup.querySelector(".popup__input_type_name");
let popupInputOccupation = popup.querySelector(".popup__input_type_occupation");
let profileUserName = profile.querySelector(".profile__user-name");
let profileUserOccupation = profile.querySelector(".profile__user-occupation");
let popupForm = popup.querySelector(".popup__form");

function openPopup() {
  popup.classList.add("popup_opened");
  popupInputName.value = profileUserName.textContent;
  popupInputOccupation.value = profileUserOccupation.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileUserName.textContent = popupInputName.value;
  profileUserOccupation.textContent = popupInputOccupation.value;
  popup.classList.remove("popup_opened");
}

editProfileButton.addEventListener("click", openPopup);
popupСloseIcon.addEventListener("click", closePopup);
popupForm.addEventListener("submit", handleFormSubmit);
