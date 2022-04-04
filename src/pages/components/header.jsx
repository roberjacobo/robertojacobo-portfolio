import React from 'react';
import Navbar from '../components/navbar'
import "../../styles/components/header.css"

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <div>
          <h1>Roberto Jacobo</h1>
          <h2>Backend Developer</h2>
          <h2>Test Automation Engineer</h2>
        </div>
      </div> 
    </>
  )
};

export default Header
