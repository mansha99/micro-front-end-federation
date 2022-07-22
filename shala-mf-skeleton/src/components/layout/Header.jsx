import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Shala Micro FrontEnd
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/auth/signin" className="nav-link">Login </Link>
            </li>

            <li class="nav-item">
              <Link to="/auth/signup"className="nav-link">Registration </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
