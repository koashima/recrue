import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = (props) => {
  let nav = props.user ? (
    <div className="NavBar-container">
      <Link to="/prospects" className="NavBar-link">
        PROSPECTS
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div className="NavBar-container">
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  return [nav];
};

export default Nav;
