import React from "react";
import { Link } from "react-router-dom";
import NavmenuButton from "../header/NavmenuButton";

function Logo() {
  return (
    <div className="app-logo">
      <Link to="/">
        <span className="head">delux</span>
        <span className="tail">outsourcing</span>
      </Link>
      <NavmenuButton />
    </div>
  );
}

export default Logo;
