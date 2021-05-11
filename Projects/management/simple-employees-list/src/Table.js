import React from "react";

const Header = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const Body = (props) => {
  const characters = props.charactersData;
  console.log(characters);
  const rows = props.charactersData.map((row, index) => {
    return(<tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.remove(index)}  >Remove</button>
      </td>
    </tr>)
  });


  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  return (
    <table>
      <Header />
      <Body charactersData={props.charactersData} remove={props.remove}  />
    </table>
  );
};

export default Table;
