import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Report from "./pages/Report";
import Messages from "./pages/Messages";
import Support from "./pages/Support";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/reports" component={Report} />
          <Route path="/messages" component={Messages} />
          <Route path="/team" component={Team} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
