import {
  initialCards,
  validationConfig,
  popupPlaceForm,
  newPlacePopupAddButton,
  profileForm,
  editProfileButton,
  popupInputName,
  popupInputOccupation,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const openImagePopup = new PopupWithImage('.popup_type_image');
openImagePopup.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__user-name',
  occupation: '.profile__user-occupation',
});
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      name: data.name,
      occupation: data.occupation,
    });
    editProfilePopup.close();
  },
});

editProfilePopup.setEventListeners();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.open();
  const user = userInfo.getUserInfo();
  popupInputName.value = user.name;
  popupInputOccupation.value = user.occupation;
  profileFormValidation.hideFormErrors();
});

const newPlacePopup = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {
    const cardElement = createCard(formData);
    cardsList.addItem(cardElement);
  },
});
newPlacePopup.setEventListeners();

newPlacePopupAddButton.addEventListener('click', () => {
  newPlacePopup.open();
  placeFormValidation.disableButton();
  placeFormValidation.hideFormErrors();
});

function createCard(data) {
  const card = new Card(data, '#elementTemplate', (name, link) => {
    openImagePopup.open(name, link);
  });
  return card.generateCard();
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  '.elements'
);
cardsList.renderItems();
const profileFormValidation = new FormValidator(validationConfig, profileForm);
profileFormValidation.enableValidation();
const placeFormValidation = new FormValidator(validationConfig, popupPlaceForm);
placeFormValidation.enableValidation();
