import React from "react";
import Nav from "./Nav";
import "../stylesheets/About.scss";
import git from "../images/git.svg";
import { connect } from "react-redux";
import linked from "../images/linked.svg";

export function About(props) {
  return (
    <div
      className={
        props.mode ? "about--wrapper dark_mode" : "about--wrapper light_mode"
      }
    >
      <div className="home--nav">
        <Nav />
      </div>
      <div
        className={
          props.mode ? "home--heading dark_mode" : "home--heading light_mode"
        }
      >
        <div className="home--heading_name">Anuradha</div>
        <div className="home--heading_name">Sivasubramanian</div>
      </div>
      <div
        className={
          props.mode
            ? "home--title topline_d bottomline_d"
            : "home--title topline_l bottomline_l"
        }
      >
        <p className="home--title_text">FULL STACK WEB DEVELOPER</p>
      </div>
      <div
        className={
          props.mode ? "about--desc dark_mode" : "about--desc light_mode"
        }
      >
        <div className="about--desc_summary">
          A software engineer by education and a former Montessori Teacher, I
          recently completed my full stack web development training. I enjoy
          coding challenges, board games and solving puzzles like Sudoku when I
          am not building apps.
        </div>
        <div
          className={
            props.mode
              ? "about--desc_skills dark_mode "
              : "about--desc_skills light_mode "
          }
        >
          <div
            className={
              props.mode
                ? "about--desc_skills_text topline_d bottomline_d "
                : "about--desc_skills_text topline_l bottomline_l "
            }
          >
            {" "}
            <p
              className={
                props.mode ? "about--desc_skills_p" : "about--desc_skills_p "
              }
            >
              KEY SKILLS
            </p>
          </div>

          <ul className="about--desc_skills_ul">
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              Javascript, React
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              Redux with Thunk
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              HTML, CSS, Bootstrap
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              NodeJs and Express
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              Familiar with mySQL
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              Version control - Git{" "}
            </li>
            <li
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              TDD with Jest and Enzyme
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          props.mode ? "about--links dark_mode" : "about--links light_mode"
        }
      >
        {" "}
        <a href="https://www.linkedin.com/in/anuradha-sivasubramanian/">
          <img
            className={props.mode ? "about--link_image_d" : "about--link_image"}
            src={linked}
            alt="git"
          />
        </a>
        <a href="https://github.com/AnuradhaSivasubramanian">
          <img
            className={props.mode ? "about--link_image_d" : "about--link_image"}
            src={git}
            alt="git"
          />
        </a>
      </div>

      {/*
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
          iconixar
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(About);
