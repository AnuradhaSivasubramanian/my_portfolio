import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import light from "../images/sun.svg";
import dark from "../images/moon.svg";
import "../stylesheets/Global.scss";
import "../stylesheets/Nav.scss";

export function Nav(props) {
  return (
    <div className="nav--wrapper dark_mode">
      <nav>
        <div className="nav--home">
          <Link to="/" className="nav--mode_home dark_mode">
            Home
          </Link>
          {props.mode ? (
            <img
              onClick={() => {
                sessionStorage.setItem("dark_mode", !props.mode);
                props.dispatch({ type: "CHANGE_MODE", dark: !props.mode });
              }}
              className="nav--mode_icon"
              src={light}
              alt="mode"
            />
          ) : (
            <img
              onClick={() => {
                sessionStorage.setItem("dark_mode", !props.mode);
                props.dispatch({ type: "CHANGE_MODE", dark: !props.mode });
              }}
              className="nav--mode_icon"
              src={dark}
              alt="mode"
            />
          )}
        </div>
        <div className="nav--items">
          <Link to="/projects" className="nav--links  dark_mode">
            Projects
          </Link>
          <Link to="/about" className="nav--links  dark_mode">
            About Me
          </Link>
        </div>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(Nav);
