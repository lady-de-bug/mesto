import './index.css';
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


const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__user-name',
  occupation: '.profile__user-occupation',
});

const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
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
    section.addNewItem(cardElement);
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
    popupWithImage.open(name, link);
  });
  return card.generateCard();
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
    },
  },
  '.elements'
);
section.renderItems();
const profileFormValidation = new FormValidator(validationConfig, profileForm);
profileFormValidation.enableValidation();
const placeFormValidation = new FormValidator(validationConfig, popupPlaceForm);
placeFormValidation.enableValidation();
