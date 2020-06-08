import React from "react";
import Nav from "./Nav";
import "../stylesheets/About.scss";
import git from "../images/git.svg";
import linked from "../images/linked.svg";

export default function About() {
  return (
    <div className="about--wrapper">
      <div className="home--nav">
        <Nav />
      </div>

      <div className="home--heading">
        <div className="home--heading_name">Anuradha</div>
        <div className="home--heading_name">Sivasubramanian</div>
      </div>
      <div className="home--title topline bottomline">
        <p className="home--title_text">FULL STACK WEB DEVELOPER</p>
      </div>
      <div className="about--desc">
        <div className="about--desc_summary">
          A software engineer by education and a former Montessori Teacher, I
          recently completed my full stack web development training. I enjoy
          coding challenges, board games and solving puzzles like Sudoku when I
          am not building apps.
        </div>
        <div className="about--desc_skills">
          <p className="about--desc_skills_p">Key Technical Skills</p>
          <ul className="about--desc_skills_ul">
            <li>HTML, CSS, Bootstrap</li> <li>Javascript, React</li>
            <li>Redux with Thunk</li>
            <li>NodeJs (incl. Express REST API, Express Middlewares)</li>
            <li>Familiar with mySQL</li>
            <li>Version control - Git </li>
            <li>TDD with Jest and Enzyme</li>
          </ul>
        </div>
      </div>
      <div className="about--links">
        {" "}
        <a href="https://www.linkedin.com/in/anuradha-sivasubramanian/">
          <img className="about--link_image" src={linked} alt="git" />
        </a>
        <a href="https://github.com/AnuradhaSivasubramanian">
          <img className="about--link_image" src={git} alt="git" />
        </a>
      </div>
    </div>
  );
}
