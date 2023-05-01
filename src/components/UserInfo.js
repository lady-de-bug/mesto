export default class UserInfo {
  constructor({ name, occupation, avatar }) {
    this._name = document.querySelector(name);
    this._occupation = document.querySelector(occupation);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      occupation: this._occupation.textContent,
      avatar: this._avatar.src,
    };
  }
  setUserInfo({ name, about, avatar, _id }) {
    this._avatar.src = avatar;
    this._name.textContent = name;
    this._occupation.textContent = about;
    this._userId = _id;
  }
  getUserId() {
    return this._userId;
  }
}
