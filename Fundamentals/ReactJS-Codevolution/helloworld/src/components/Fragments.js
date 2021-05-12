import React from "react";

function Column() {
  return (
    <React.Fragment>
      <td>Hello</td>
      <td>Fragments</td>
    </React.Fragment>
  );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Column />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
