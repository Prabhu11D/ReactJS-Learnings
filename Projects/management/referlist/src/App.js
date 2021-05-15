import React, { useState } from "react";
import "./assets/sass/App.scss";
import Company from "./components/Company";
import Setup from "./components/Setup";
import Signups from "./components/Signups";
import Billing from "./components/Billing";
import Tabs from "./components/Tabs";

function App() {
  const [selectedTab, setSelectedTab] = useState("Setup");
  const companyName = "Cartrabbit";

  let currentTab;
  switch (selectedTab) {
    case "Setup":
      currentTab = <Setup />;
      break;
    case "Signups":
      currentTab = <Signups />;
      break;
    case "Billing":
      currentTab = <Billing />;
      break;
    default:
      currentTab = <Setup />;
      break;
  }

  return (
    <div className="container">
      <div className="left-container">
        <Company name={companyName} />
        <Tabs
          names={["Setup", "Signups", "Billing"]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="right-container">{currentTab}</div>
    </div>
  );
}

export default App;
