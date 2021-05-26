import React from 'react'
import './App.css';
import Random from './components/Random_V1';
import Tag from './components/Tag_V1';

function App() {
  return (
    <div>
      <h2>Gif App</h2>
      <div className='main-container' >
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
