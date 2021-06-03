import React, { Component } from 'react';
import JobDetail from './components/JobDetail';
import JobPortal from './components/JobPortal';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <JobPortal />
        <JobDetail />
      </div>
    );
  }
}

export default App;
