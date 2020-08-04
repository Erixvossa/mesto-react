


const baseURL = 'https://mesto.nomoreparties.co/v1/cohort-12'; //базовый URL
const token = 'ab9b1d7a-c640-4a74-a08b-ca064f57658c';


class Api {
  constructor(baseURL, token) {
    this._baseURL = baseURL;
    this._token = token;
  }

  _fetchData(url, options) {
    return fetch(this._baseURL + url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getUserInfo() {
    return this._fetchData('/users/me', {
      headers: {
        authorization: this._token
      }
    })
  }

  updateUserInfo(formData) {
    return this._fetchData('/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  getInitialCards() {
    return this._fetchData('/cards', {
      headers: {
        authorization: this._token
      }
    })
  }

  uploadCard(formData) {
    return this._fetchData('/cards', {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  likeCard(id, liked) {
    let method;
    if (liked) {
      method = 'DELETE';
    } else {
      method = 'PUT';
    }
    return this._fetchData('/cards/likes/' + id, {
      method: method,
      headers: {
        authorization: this._token
      }
    })
  }

  deleteCard(id) {
    return this._fetchData('/cards/' + id, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
  }

  changeAvatar(link) {
    return this._fetchData('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
  }
}

export default new Api(baseURL, token);