import "./App.css";
import CompA from "./components/Context/CompA";
import { UserProvider } from "./components/Context/UserContext";

function App() {
  return (
    <div>
      <UserProvider value="Prabhu">
        <CompA />
      </UserProvider>
    </div>
  );
}

export default App;
