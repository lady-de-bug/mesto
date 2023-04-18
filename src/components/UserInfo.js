export default class UserInfo {
  constructor({ name, occupation }) {
    this._name = document.querySelector(name);
    this._occupation = document.querySelector(occupation);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      occupation: this._occupation.textContent,
    };


  }
  setUserInfo({name, occupation}) {
    this._name.textContent = name;
    this._occupation.textContent = occupation;
  }
}
