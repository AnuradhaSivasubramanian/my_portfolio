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
          <Link to="/projects" className="nav--links">
            Projects
          </Link>
          <Link to="/about" className="nav--links">
            About Me
          </Link>
        </div>
      </nav>
    </div>
  );
}
