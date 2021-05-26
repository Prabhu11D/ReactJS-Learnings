import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" onClick={showSideBar}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav
        className={sideBar ? "nav-menu active" : "nav-menu"}
        onClick={showSideBar}
      >
        <ul>
          <li>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineCloseCircle />
            </Link>
          </li>
          {SideBarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
