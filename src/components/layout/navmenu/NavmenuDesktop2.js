import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

function NavmenuDesktop2() {
  return (
    <nav className="app-nav-desktop">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/why-deluxe">Why deluxe</NavLink>
      <NavLink to="/how-it-works">How it works</NavLink>
      <NavLink to="/build-your-team">Build your team</NavLink>
      <NavLink to="/learn">Learn</NavLink>
      <NavLink to="/careers">Career</NavLink>
      <NavLink to="/about-us">About us</NavLink>
      <NavLink to="/contact-us">
        Contact us
        <span className="nav-icon">
          <FaPhone />
        </span>
      </NavLink>
    </nav>
  );
}

export default NavmenuDesktop2;
