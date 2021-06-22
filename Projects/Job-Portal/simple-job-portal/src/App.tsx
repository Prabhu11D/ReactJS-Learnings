import React, { Component } from 'react';
import JobDetail from './components/JobDetail';
import JobPortal from './components/JobPortal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <div>
              <JobPortal />
              <JobDetail />
            </div>
          </Route>
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
