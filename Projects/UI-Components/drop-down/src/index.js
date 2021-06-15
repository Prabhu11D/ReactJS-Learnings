import React from 'react';
import ReactDOM from 'react-dom';
// import SearchableDropDown from './searchable-drop-down';
import FaceBookDropDownMenu from './facebook-menu';

function App() {
  return (
    <>
      {/* <SearchableDropDown /> */}
      <FaceBookDropDownMenu />
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
