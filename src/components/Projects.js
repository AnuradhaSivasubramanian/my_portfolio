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
      <div className="projects--heading">
        <div className="projects--heading_name">Projects</div>
      </div>
      <div className="projects--title topline bottomline">
        <p className="projects--title_text">OVERVIEW OF PROJECTS</p>
      </div>
      <div className="projects--list">
        {projects.map((item, index) => (
          <div key={index} className="projects--list_map">
            <div
              className="list--project_left"
              style={{ background: `${item.left}` }}
            >
              <div className="project--index bottomline">0{index + 1}</div>
              <div className="project--title bottomline">
                <div className="project--title_text"> {item.title}</div>
              </div>
              <div className="project--links ">
                <div className="project--view bottomline">
                  <p>View case</p>
                  <Link to="/specs">
                    <img
                      onClick={() =>
                        props.dispatch({
                          type: "SELECT_PROJECT",
                          project: item,
                        })
                      }
                      className="arrow--image"
                      src={arrow}
                      alt="linkarrow"
                    />
                  </Link>
                </div>
                <div className="project--link">
                  <p>View website</p>
                  <a href={item.url}>
                    <img className="arrow--image" src={arrow} alt="linkarrow" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="list--project_right"
              style={{ background: `${item.right}` }}
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
  };
};

export default connect(mapStateToProps)(Projects);
