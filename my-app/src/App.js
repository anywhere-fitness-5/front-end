
import React, { Component } from 'react';
import UserLogin from './components/UserLogin';
import Register from './components/Register'
import Dash from './components/ClientDash';
import PrivateRoute from './components/PrivateRoute';

import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route  exact path ="/" > <div>Welcome to the home page</div> </Route> 
          <Route path="/register" component={Register} />
          <Route path="/login" component={UserLogin} />
          <PrivateRoute path="/dashboard" component={Dash} />
        </Switch>
      </div>
    );
  }
}
export default App 