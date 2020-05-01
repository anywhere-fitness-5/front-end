import React, { Component } from 'react';
import UserLogin from './components/UserLogin';
import Register from './components/Register'
import Home from './components/Home'
import Dash from './components/ClientDash';
import PrivateRoute from './components/PrivateRoute';
import Div from './components/styled-comp/home-comp.jsx'

import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Div className="App">
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Classes</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={UserLogin} />
          <PrivateRoute path="/dashboard" component={Dash} />
        </Switch>
      </Div>
    );
  }
}
export default App 