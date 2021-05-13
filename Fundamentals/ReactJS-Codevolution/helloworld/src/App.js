import "./App.css";
import ForwardRefComp from "./components/Refs/ForwardRefComp";
import RefsDemo from "./components/Refs/RefsDemo";
import Refs_with_Class_Component from "./components/Refs/Refs_with_Class_Component";

function App() {
  // Refs only used in Class Component
  // return <RefsDemo />;
  // return <Refs_with_Class_Component />;
  return <ForwardRefComp />;
}

export default App;
