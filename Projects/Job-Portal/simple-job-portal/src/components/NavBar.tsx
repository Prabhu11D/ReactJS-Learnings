import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/job_logo.png';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light  navbar-expand-sm">
        <div className="container-fluid">
          <img src={logo} alt="logo" style={{ width: '60px' }} />
          <div className='navbar-collapse'>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
