// import React from 'react'

export default class BaseApi {
  static ENDPOINT = 'http://localhost:8003';

  static postRequest(url, data, fnc) {
    return fetch(
      url,
      {
        method: 'POST',
        body: data
      }
    )
    .then(response => this._parseJSON(response))
    .then(responseData => fnc(responseData))
    .catch(error =>{
      console.error(error);
    });
  }

  static _parseJSON(response) {
    return response.text().then(function(text) {
      return text ? JSON.parse(text) : {}
    })
  }
}
