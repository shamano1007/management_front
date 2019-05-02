import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authenticated from './components/Authenticated'
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { isLoggedIn: false, currentUser: null };
  // }

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Authenticated>
              <Switch>
                { /* 認証済み */ }
                <Route exact path='/' component={Home}/>
              </Switch>
            </Authenticated>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
