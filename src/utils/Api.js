import React from 'react';


const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-12'; //базовый URL
const token = 'ab9b1d7a-c640-4a74-a08b-ca064f57658c';

//на данный момент бОльшая часть запросов не функционирует, "работают" только  GET-запросы
class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }
//приватный фетч запрос
  _fetch(url, params) {
      params.headers = {
        authorization: 'ab9b1d7a-c640-4a74-a08b-ca064f57658c',
        'Content-Type': 'application/json'
      };
    return fetch(this._baseUrl + url, params)
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(res.status);
        } else {
          return res.json();
        }
      })
  }
  //получаем карточки с сервера
  getInitialCards(url) {
    return this._fetch(url, {
      method: 'GET'
    })
  }
  //получает имя и деятельность автора с сервера
  getUserInterface(url) {
    return this._fetch(url, {
      method: 'GET'
    })
  }
  //отправить инфооацию об аторе на сервер и обновить ее
  sendUserInfo(url, data) {
    return this._fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        name: `${data.author}`,
        about: `${data.job}`
      })
    })
  }
  //отправить карточку на сервер
  sendPlaceCard(url, data) {
    return this._fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`
      })
    })
  }
  //удалить карточку с сервера
  deleteCard(url) {
    return this._fetch(url, {
      method: 'DELETE'
    })
  }
 //поставить лайк и обновить массив лайков
  putLike(url) {
    return this._fetch(url, {
      method: 'PUT'
      })
  }
  //поменять аватар
  changeAvatar(url, data) {
    return this._fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: `${data.avatar}`
      })
    })
  }
}

export const api = new Api({baseUrl});