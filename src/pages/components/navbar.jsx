import React from "react"
import "bootstrap/dist/css/bootstrap.css"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">
              About me
            </a>
            <a class="nav-link" href="#">
              What I do
            </a>
            <a class="nav-link" href="#">
              Where I've worked
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
