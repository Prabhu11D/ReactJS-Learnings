import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Admin from './components/Admin';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
