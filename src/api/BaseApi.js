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
    .then((responseJson) => fnc(responseJson))
    .catch((error) =>{
      console.error(error);
    });
  }

}
