import React from "react";

function Table({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Email</th>
          <th>Joined</th>
          <th>Verified</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{user.email}</td>
            <td>{user.SignUpDate}</td>
            <td>{user.verified}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
