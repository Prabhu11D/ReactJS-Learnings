import React from "react";
import { Provider } from "react-redux";
import CakeShop from "./components/CakeShop";
import { store } from "./redux/Cake";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeShop />
      </div>
    </Provider>
  );
}

export default App;
