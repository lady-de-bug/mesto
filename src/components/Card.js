export default class Card {
  constructor({
    // card
    data,
    elementTemplateSelector,
    handleCardClick,
    userId,
    handleDeleteButtonClick,
    handleLikeButtonClick,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._elementTemplateSelector = elementTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._likes = data.likes; // first render 30 cards
  }

  _getTemplate() {
    const newElement = document
      .querySelector(this._elementTemplateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return newElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector('.element__name-place').textContent =
      this._name;
    this._elementPlaceLike = this._element.querySelector(
      '.element__place-like'
    );

    this._elementTrashIcon = this._element.querySelector(
      '.element__trash-icon'
    );
    this._likesCounter = this._element.querySelector('.element__likes-counter');

    this.updateLikes(this._likes);
    this._hideTrashIcon();

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementPlaceLike.addEventListener('click', () =>
      this._handleLikeButtonClick(this)
    );
    this._elementTrashIcon.addEventListener('click', () =>
      this._handleDeleteButtonClick(this._cardId)
    );

    this._elementImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  getIsLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  getCardId() {
    return this._cardId;
  }

  // При лайке
  updateLikes(likes) {
    this._likes = likes;
    this._likesCounter.textContent = likes.length;
    if (this.getIsLiked()) {
      this._elementPlaceLike.classList.add('element__place-like_active');
    } else {
      this._elementPlaceLike.classList.remove('element__place-like_active');
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _hideTrashIcon() {
    if (this._userId !== this._cardOwnerId) {
      this._elementTrashIcon.remove();
    }
  }
}
