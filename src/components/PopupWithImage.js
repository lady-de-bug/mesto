import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector('.popup__large-image');
    this._imageCaption = this._popupSelector.querySelector(
      '.popup__image-caption'
    );
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}


