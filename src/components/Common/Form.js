// import React from 'react'

export default class CommonForm {
  constructor(self, data) {
    this.self = self
    this.self.state = {data: data}
  }

  handleChange(e) {
      var data = this.state.data;
      data[e.target.name] = e.target.value
      this.setState({data: data})
  }
}
