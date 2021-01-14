import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import { Greet } from './components/Greet';

import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Greet name="Prabhu" heroName="Iron Man" />
            <Welcome name="Prabhu" heroName="Iron Man" />
        </div>
    );
}

export default App;
