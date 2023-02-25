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

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Горы Архыза летом.",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Озеро Челябинска зимой.",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Жилой массив состоящий из панельных домов.",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Растительность у подножья горы.",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Железная дорога, бегущая среди полей и  уходящая к горизонту.",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Волны озера омывают скалистый берег.",
  },
];

const elements = document.querySelector(".elements");

initialCards.forEach(function (card) {
  const newElement = elements
    .querySelector("#elementTemlate")
    .content.cloneNode(true);
  const elementImage = newElement.querySelector(".element__image");
  elementImage.setAttribute('src', card.link)
  elementImage.setAttribute('alt', card.alt)
  const elementNamePlace = newElement.querySelector(".element__name-place");
  elementNamePlace.textContent = card.name;

  elements.append(newElement);
});
