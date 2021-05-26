import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Nav from "./pages/Nav";
import Item from './pages/ItemDetails';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact  component={Shop} />
        <Route path="/shop/:id" component={Item} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

export default App;
