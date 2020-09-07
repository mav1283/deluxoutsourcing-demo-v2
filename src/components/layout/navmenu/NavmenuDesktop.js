import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

function NavmenuDesktop() {
  return (
    <nav className="app-nav-desktop">
      <NavLink exact to="/">
        Home<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/why-deluxe">
        Why deluxe<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/how-it-works">
        How it works<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/build-your-team">
        Build your team<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/learn">
        Learn<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/careers">
        Career<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/about-us">
        About us<span className="nav-icon spin">&#10095;</span>
      </NavLink>
      <NavLink to="/contact-us">
        Contact us
        <span className="nav-icon">
          <FaPhone />
        </span>
      </NavLink>
    </nav>
  );
}

export default NavmenuDesktop;
