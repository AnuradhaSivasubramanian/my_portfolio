import React from "react";
import Nav from "./Nav";
import projects from "../helpers/data";
import arrow from "../images/arrow.svg";
import "../stylesheets/Projects.scss";

export default function Projects() {
  return (
    <div className="projects--wrapper">
      <div className="home--nav">
        <Nav />
      </div>
      <div className="home--heading">
        <div className="home--heading_name">My Projects</div>
      </div>
      <div className="home--title topline bottomline">
        <p className="home--title_text">Overview of Projects</p>
      </div>
      <div className="projects--list">
        {projects.map((item, index) => (
          <div className="projects--list_map">
            <div className="list--project_left">
              <div className="project--index bottomline">0{index + 1}</div>
              <div className="project--title bottomline">
                <div className="project--title_text"> {item.title}</div>
              </div>
              <div className="project--links ">
                <div className="project--view bottomline">
                  <p>View case</p>
                  <img className="arrow--image" src={arrow} alt="linkarrow" />
                </div>

                <div className="project--link">
                  <p>View website</p>

                  <a href="https://www.w3schools.com">
                    <img className="arrow--image" src={arrow} alt="linkarrow" />
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
