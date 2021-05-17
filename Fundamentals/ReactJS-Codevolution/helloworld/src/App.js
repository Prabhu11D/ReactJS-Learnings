import "./App.css";
import Counter from "./components/RenderProps/Counter";
import ClickCount from "./components/RenderProps/ClickCount";
import HoverCount from "./components/RenderProps/HoverCount";

function App() {
  return (
    <div>
      <h1>Render Props</h1>
      <Counter>
        {(count, incrementCounter) => (
          <ClickCount count={count} incrementCount={incrementCounter} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCounter) => (
          <HoverCount count={count} incrementCount={incrementCounter} />
        )}
      </Counter>
    </div>
  );
}

export default App;
