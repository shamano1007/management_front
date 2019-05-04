// import React from 'react'
import BaseApi from './BaseApi'

export default class LoginApi extends BaseApi {
  static post(data, process) {
    this.postRequest(
      `${this.ENDPOINT}/login`,
      data,
      process
    )
  }
}
