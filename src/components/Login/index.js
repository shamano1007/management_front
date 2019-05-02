import React from 'react'
import CommonForm from '../Common/Form'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.form = new CommonForm(this, {});

  }

  onSubmit(e) {
    console.log(this.state.data);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>ログイン</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="name">login id</label>
          <input type="text" name="login_id" onChange={this.form.handleChange.bind(this)} />
          <label htmlFor="password">パスワード</label>
          <input type="password" name="password" onChange={this.form.handleChange.bind(this)} />
          <button type="submit">ログイン</button>
        </form>
      </div>
    )
  }
}

export default Home;
