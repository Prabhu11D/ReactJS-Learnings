import React from "react";

function Tabs(props) {
  const { names, setSelectedTab, selectedTab } = props;
  return (
    <div>
      <ul className="tabs">
        {names.map((name) => (
          <li
            key={name}
            className={selectedTab === name ? "active" : ""}
            onClick={() => setSelectedTab(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
