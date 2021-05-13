import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Hero from "./components/ErrorBoundary/Hero";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
