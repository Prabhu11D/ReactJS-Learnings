import React from "react";
import Logo from "../assets/logo.svg";

function Company(props) {
  return (
    <div className="company">
      <div>
        <a href="#">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </a>
        <img src={Logo} alt="Logo" />
      </div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Company;
