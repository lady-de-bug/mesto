import './index.css';
import {
  validationConfig,
  popupPlaceForm,
  newPlacePopupAddButton,
  profileForm,
  editProfileButton,
  popupInputName,
  popupInputOccupation,
  avatarForm,
  avatar,
  editAvatarButton,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '77ea4194-68a5-47e9-b2b9-0fd15151e335',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);

    section.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__user-name',
  occupation: '.profile__user-occupation',
  avatar: '.profile__avatar',
});

const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    editProfilePopup.isLoadingMessage(true);
    api
      .editUserInfo(data)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.isLoadingMessage(false);
      });
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
    newPlacePopup.isLoadingMessage(true);
    api
      .addNewCard(formData)
      .then((formData) => {
        section.addNewItem(createCard(formData));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        newPlacePopup.isLoadingMessage(false);
      });
  },
});

newPlacePopup.setEventListeners();

newPlacePopupAddButton.addEventListener('click', () => {
  newPlacePopup.open();
  placeFormValidation.disableButton();
  placeFormValidation.hideFormErrors();
});

const changeAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    changeAvatarPopup.isLoadingMessage(true);
    api
      .changeAvatar(data)
      .then((avatar) => {
        userInfo.setUserInfo(avatar);
        changeAvatarPopup.close(avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        changeAvatarPopup.isLoadingMessage(false);
      });
  },
});
changeAvatarPopup.setEventListeners();
editAvatarButton.addEventListener('click', () => {
  changeAvatarPopup.open();
  avatarFormValidation.disableButton();
  avatarFormValidation.hideFormErrors();
});
const section = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
    },
  },
  '.elements'
);
const popupWithSubmit = new PopupWithSubmit({
  popupSelector: '.popup_type_submit',
});
popupWithSubmit.setEventListeners();

function createCard(data) {
  const userId = userInfo.getUserId();
  const card = new Card({
    data: data,
    elementTemplateSelector: '#elementTemplate',
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },

    userId: userId,
    handleDeleteButtonClick: (cardId) => {
      popupWithSubmit.open();
      popupWithSubmit.actionOfSubmitForm(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            popupWithSubmit.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleLikeButtonClick: (card) => {
      const isLiked = card.getIsLiked();
      const cardId = card.getCardId();
      api.updateLike(cardId, isLiked).then((updatedCard) => {
        card.updateLikes(updatedCard.likes);
      });
    },
  });
  return card.generateCard();
}

const profileFormValidation = new FormValidator(validationConfig, profileForm);
profileFormValidation.enableValidation();
const placeFormValidation = new FormValidator(validationConfig, popupPlaceForm);
placeFormValidation.enableValidation();
const avatarFormValidation = new FormValidator(validationConfig, avatarForm);
avatarFormValidation.enableValidation();

// if (isLiked) {
//   api.deleteLike(cardId)
//   .then(updatedCard => { // card = {name, likes: [{}], ...}
//     card.updateLikes(updatedCard.likes)
//   })
// } else {
//   api.setLike(cardId)
//   .then(updatedCard => { // card = {name, likes, ...}
//     card.updateLikes(updatedCard.likes)
//   })
// }
