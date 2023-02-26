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
const profile = document.querySelector(".profile");
const editProfileButton = profile.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupСloseIcon = popup.querySelector(".popup__close-icon");
const popupInputName = popup.querySelector(".popup__input_type_name");
const popupInputOccupation = popup.querySelector(
  ".popup__input_type_occupation"
);
const profileUserName = profile.querySelector(".profile__user-name");
const profileUserOccupation = profile.querySelector(
  ".profile__user-occupation"
);
const popupForm = popup.querySelector(".popup__form");

const profileAddButton = profile.querySelector(".profile__add-button");
const newItemPopup = document.querySelector(".new-item-popup");
const placeCloseIcon = newItemPopup.querySelector(".place-close-icon");
const popupPlaceForm = newItemPopup.querySelector(".popup-place-form");
const popupInputPlace = popupPlaceForm.querySelector(
  ".popup__input_type_place"
);
const popupInputLink = popupPlaceForm.querySelector(".popup__input_type_link");
const elements = document.querySelector(".elements");

console.log(popupInputPlace);

function openPopup() {
  popup.classList.add("popup_opened");
  popupInputName.value = profileUserName.textContent;
  popupInputOccupation.value = profileUserOccupation.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}
function openPlacePopup() {
  newItemPopup.classList.add("popup_opened");
}

function closePlacePopup() {
  newItemPopup.classList.remove("popup_opened");
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

popupPlaceForm.addEventListener("submit", handlePlaceFormSubmit);

profileAddButton.addEventListener("click", openPlacePopup);
placeCloseIcon.addEventListener("click", closePlacePopup);

// Задание 1. При загрузке на странице должно быть 6 карточек, которые добавит JavaScript. Используется массив initialCards.

function addCard(card) {
  const newElement = elements
    .querySelector("#elementTemplate")
    .content.cloneNode(true);
  const elementImage = newElement.querySelector(".element__image");
  elementImage.setAttribute("src", card.link);
  elementImage.setAttribute("alt", card.alt);
  const elementNamePlace = newElement.querySelector(".element__name-place");
  elementNamePlace.textContent = card.name;
  elements.append(newElement);
}
initialCards.forEach(addCard);

/*  Задание 2 Сделайте так, чтобы при клике на «сохранить»
  новая карточка попадала в начало контейнера с ними.
  А диалоговое окно после добавления автоматически закрывалось. */

function handlePlaceFormSubmit(event) {
  event.preventDefault();
  const place = popupInputPlace.value;
  const link = popupInputLink.value;
  const newCard = {
    place: place,
    link: link,
  };
  addCard(newCard);
  elements.prepend(newCard);
  newItemPopup.classList.remove("popup_opened");
}
/* У меня на данном этапе две проблемы:
1-не отображается название места в новой карточке
2- не получается реализовать prepend для новой карточки.
Я использую append в первой функции при загрузке 6 карточек
При сабмите указываю prepend. Но когда
передаю  функции addCard параметр newCard, у меня добавляется карточка в конец документа
И в начале пустое поле( */
