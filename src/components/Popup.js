export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);

  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        this.close();
      }
    });
  }

  // setEventListeners() {
  //   this._closeButton.addEventListener('click', (evt) => {
  //       this.close();
  //     });
  //     this._popupSelector.addEventListener('click', (evt) => {
  //       if (evt.target.classList.contains('popup_opened')) {
  //         this.close();
  //       }
  //     });

  // }
}
