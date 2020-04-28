
import React, {Component} from 'react';
import Login from './components/UserLogin';
import Register from './components/Register';
import Dash from './components/Client/ClientDash';
import PrivateRoute from './components/PrivateRoute';

import {Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return(
<div className="App">
  <PrivateRoute exact path="/" component={Dash}/>
  <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
  </div>
    );
  }
}
export default App