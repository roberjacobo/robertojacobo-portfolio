import React from "react";
import "../../styles/components/navbar.css";
import { Link } from "gatsby"

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="list-container">
        <button>About Me</button>
        <button>What I Do</button>
        <button>Resume</button>
        <button>Portfolio</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
