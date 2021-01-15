import "./App.css";
import Inline from "./components/Styling-CSS/Inline";
import Stylesheet from "./components/Styling-CSS/Stylesheet";

function App() {
    return (
        <div className="App">
            <Stylesheet primary={false} />
            <Inline />
        </div>
    );
}

export default App;
