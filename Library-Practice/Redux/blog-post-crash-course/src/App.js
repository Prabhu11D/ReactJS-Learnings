import React, { Component } from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          React Redux Blog Posts <sub>powered by JSON placeholder</sub>
        </header>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
