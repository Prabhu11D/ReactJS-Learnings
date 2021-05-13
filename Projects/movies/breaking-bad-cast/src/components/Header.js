import React, { useState } from "react";
import logo from "../img/logo.png";

const Logo = () => {
  return (
    <header className="center">
      <img src={logo} alt="logo" />
    </header>
  );
};

const SearchBox = ({ setQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    setQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

const Header = ({ setQuery }) => {
  return (
    <>
      <Logo />
      <SearchBox setQuery={setQuery} />
    </>
  );
};

export default Header;
