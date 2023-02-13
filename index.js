let profile = document.querySelector(".profile");
let editProfileButton = profile.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupСloseIcon = popup.querySelector(".popup__close-icon");
let popupInputName = popup.querySelector(".popup__input_type_name");
let popupInputOccupation = popup.querySelector(".popup__input_type_occupation");
let profileUserName = profile.querySelector(".profile__user-name");
let profileUserOccupation = profile.querySelector(".profile__user-occupation");
let popupSubmitButton = popup.querySelector(".popup__submit-btn");

editProfileButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  popupInputName.value = profileUserName.textContent;
  popupInputOccupation.value = profileUserOccupation.textContent;
});

popupСloseIcon.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function handleFormSubmit (event) {
  event.preventDefault();
  profileUserName.textContent = popupInputName.value;
  profileUserOccupation.textContent = popupInputOccupation.value;
  popup.classList.remove("popup_opened");
  }
  popupSubmitButton.addEventListener('click', handleFormSubmit);


  


// let popupCloseIcon = popup.querySelector(".popup__close-icon");
// let popupSubmitButton = popup.querySelector(".popup__submit-btn");
// console.log(popupSubmitButton);
// popupSubmitButton.addEventListener("click", function (event) {
//   profileUserName.textContent = event.popupInputName.value;

// });
// let addProfileButton = profile.querySelector(".profile__add-button");
console.log(popupInputOccupation);
