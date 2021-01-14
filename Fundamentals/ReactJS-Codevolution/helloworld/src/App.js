import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import { Greet } from './components/Greet';

import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

import FunctionClick from "./components/EventHandler/functionClick";
import ClassClick from "./components/EventHandler/classClick";

import EventBind from "./components/EventBind";

function App() {
    return (
        <div className="App">
            <EventBind />
        </div>
    );
}

export default App;
