import React from 'react';
import Navbar from '../components/navbar'
import "../../styles/components/header.css"

const Header = () => {

  var myname = "<Roberto Jacobo />"
  var job = "Full Stack"
  var x = "`${"
  var y = "}`"
  return (
    <>
      <Navbar />
      <div className="header-container">
        <div className="header-wallpaper-container">
        </div>
        <div className="names-container">
          <h1>{myname}</h1>
          <h3>José Roberto Jacobo Cruz</h3>
          <p><p className="templates-literals">{x}</p>{job}<p className="templates-literals">{y}</p> Software Developer</p>
        </div>
      </div >
    </>
  )
};

export default Header
