import React from "react";
import Nav from "./Nav";
import projects from "../helpers/data";
import Right from "../images/rightarrow.svg";

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
      <div
        className={
          props.mode ? "projects--list dark_mode" : "projects--list light_mode"
        }
      >
        {projects.map((item, index) => (
          <div
            key={index}
            className={
              props.mode
                ? "projects--list_map bottomline_d"
                : "projects--list_map bottomline_l"
            }
          >
            <div className="list--project_left">
              <div
                className={
                  props.mode
                    ? "project--index bottomline_thin_d"
                    : "project--index bottomline_thin_l"
                }
              >
                0{index + 1}
              </div>
              <div
                className={
                  props.mode
                    ? "project--title bottomline_thin_d"
                    : "project--title bottomline_thin_l"
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
                        ? "project--view bottomline_thin_d"
                        : "project--view bottomline_thin_l"
                    }
                    onClick={() => {
                      props.dispatch({
                        type: "SELECT_PROJECT",
                        project: item,
                      });
                    }}
                  >
                    <p>Details</p>
                    <img
                      className={props.mode ? "arrow--image_d" : "arrow--image"}
                      src={Right}
                      alt="linkarrow"
                    />
                  </Link>
                </div>
                <div>
                  <a href={item.url} className="project--link">
                    <p>Website</p>
                    <img
                      className={props.mode ? "arrow--image_d" : "arrow--image"}
                      src={Right}
                      alt="linkarrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="list--project_right">
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
