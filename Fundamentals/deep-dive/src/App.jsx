import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'
import WindowsCounter from './components/WindowsCounter';
import Box from './components/Box';
import Todo from './components/Todo';
import ListKey from './components/ListKey';
import {MasteringUseEffect} from './Mastering React Hooks/UseEffect/index.jsx';
import MasteringUseLayoutEffect from './Mastering React Hooks/UseLayoutEffect';
import MasteringUseState from './Mastering React Hooks/UseState';
import MasteringUseMemo from './Mastering React Hooks/UseMemo';
import MasteringUseRef from './Mastering React Hooks/UseRef';

function App(props) {

  return (
    <div className="home">
      {/* <WindowsCounter /> */}

      {/* <Box className='boxClass' onClick={() => console.log("Box Clicked")}>
        <p>Inside a Box</p>
        <h2>{write}</h2>
        <input type="text" value={write} onChange={(e) => setWrite(e.target.value)} />
      </Box> */}

      {/* <Todo /> */}

      {/* <ListKey /> */}

      {/* <MasteringUseEffect /> */}
      {/* <MasteringUseLayoutEffect /> */}
      {/* <MasteringUseState /> */}
      {/* <MasteringUseMemo /> */}
      <MasteringUseRef />
            <MasteringUseRef />


      {console.log("\n------------------------\n")}
    </div>
  )
}

export default App
