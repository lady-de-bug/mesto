export default class Card {
  constructor(data, elementTemplateSelector, onImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._elementTemplateSelector = elementTemplateSelector;
    this._onImageClick = onImageClick;
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
    this._element.querySelector('.element__name-place').textContent = this._name;
    this._elementPlaceLike = this._element.querySelector(
      '.element__place-like'
    );
    this._elementTrashIcon = this._element.querySelector(
      '.element__trash-icon'
    );

    this._setEventListeners()
    return this._element;
  }

  _setEventListeners() {
    this._elementPlaceLike.addEventListener('click', () =>
      this._handleLikeButtonClick()
    );
    this._elementTrashIcon.addEventListener('click', () =>
      this._handleDeleteButtonClick()
    );
    this._elementImage.addEventListener('click', () =>
      this._onImageClick(this._name, this._link)
    );
  }

  _handleLikeButtonClick() {
    this._elementPlaceLike.classList.toggle('element__place-like_active');
  }

  _handleDeleteButtonClick() {
    this._element.remove();
  }
}
