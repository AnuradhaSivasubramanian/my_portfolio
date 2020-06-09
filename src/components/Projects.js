import React from "react";
import Nav from "./Nav";
import projects from "../helpers/data";
import arrow from "../images/arrow.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/Projects.scss";

export function Projects(props) {
  return (
    <div className="projects--wrapper">
      <div className="home--nav">
        <Nav />
      </div>
      <div
        className={
          props.mode
            ? "projects--heading dark_mode"
            : "projects--heading light_mode"
        }
      >
        <div className="projects--heading_name">Projects</div>
      </div>
      <div
        className={
          props.mode
            ? "projects--title  dark_mode topline_d bottomline_d"
            : "projects--title  light_mode topline_l bottomline_l"
        }
      >
        <p className="projects--title_text">OVERVIEW OF PROJECTS</p>
      </div>
      <div className="projects--list">
        {projects.map((item, index) => (
          <div key={index} className="projects--list_map">
            <div
              className="list--project_left"
              style={
                props.mode
                  ? { background: `${item.left_dark}` }
                  : { background: `${item.left_light}` }
              }
            >
              <div
                className={
                  props.mode
                    ? "project--index bottomline_d"
                    : "project--index bottomline_l"
                }
              >
                0{index + 1}
              </div>
              <div
                className={
                  props.mode
                    ? "project--title bottomline_d"
                    : "project--title bottomline_l"
                }
              >
                <div className="project--title_text"> {item.title}</div>
              </div>
              <div className="project--links ">
                <div>
                  <Link
                    to="/specs"
                    className={
                      props.mode
                        ? "project--view bottomline_d"
                        : "project--view bottomline_l"
                    }
                    onClick={() => {
                      props.dispatch({
                        type: "SELECT_PROJECT",
                        project: item,
                      });
                    }}
                  >
                    <p>View case</p>
                    <img className="arrow--image" src={arrow} alt="linkarrow" />
                  </Link>
                </div>
                <div>
                  <a href={item.url} className="project--link">
                    <p>View website</p>
                    <img className="arrow--image" src={arrow} alt="linkarrow" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="list--project_right"
              style={
                props.mode
                  ? { background: `${item.right_dark}` }
                  : { background: `${item.right_light}` }
              }
            >
              <img
                className="list--project_img"
                src={item.image}
                alt="project"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(Projects);
