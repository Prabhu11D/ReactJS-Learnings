import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import { Greet } from './components/Greet';

import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Greet name="Prabhu" heroName = "Iron Man">
                <p>Charge Me</p>
            </Greet>
            <Greet name="John" heroName="Thor">
                <button>Rotate Me</button>
            </Greet>
            <Greet name="Jai Surya" heroName="Captain America">
                <button>S.H.I.E.L.D</button>
            </Greet>

            <Welcome name="Jai Surya" heroName="Captain America"/>
        </div>
    );
}

export default App;
