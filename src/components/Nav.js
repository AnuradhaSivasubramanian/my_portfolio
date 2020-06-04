import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Global.scss";
import "../stylesheets/Nav.scss";

export default function Nav() {
  return (
    <div className="nav--wrapper">
      <nav>
        <div className="nav--home">
          <Link to="/">Home</Link>
        </div>
        <div className="nav--items">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
