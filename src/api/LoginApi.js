// import React from 'react'
import BaseApi from './BaseApi'

export default class LoginApi extends BaseApi {
  static post(data) {
    console.log(data);
    this.postRequest(
      `${this.ENDPOINT}/login`,
      data,
      (responseJson) => {
        console.log(responseJson);
      }
    )
  }
}
