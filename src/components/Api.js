export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }


  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.occupation,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  updateLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // setLike(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
  //     method: 'PUT',
  //     headers: this._headers,
  //   }).then((res) => this._checkResponse(res));
  // }
  // deleteLike(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
  //     method: 'DELETE',
  //     headers: this._headers,
  //   }).then((res) => this._checkResponse(res));
  // }
 }
