import React from "react";
import "../../styles/components/navbar.css";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="list-container">
        <button className="btn-navbar">About Me</button>
        <button className="btn-navbar">What I Do</button>
        <button className="btn-navbar">Resume</button>
        <button className="btn-navbar">Portfolio</button>
        <button className="btn-navbar">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
