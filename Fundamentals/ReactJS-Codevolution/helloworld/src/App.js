import "./App.css";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";

function App() {
  return (
    <div>
      <ClickCounter name="Prabhu" />
      <HoverCounter name="Vishwas" />
    </div>
  );
}

export default App;
