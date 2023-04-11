export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popupSelector.querySelector('.popup__close-icon');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }


  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
        this.close();
      });
      this._popupSelector.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.close();
        }
      });

  }
}



