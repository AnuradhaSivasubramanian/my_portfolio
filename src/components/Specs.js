import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../stylesheets/Specs.scss";

export function Specs(props) {
  if (!props.project.title) {
    return <Redirect to="/projects" />;
  }
  return (
    <div
      className={
        props.mode ? "specs--wrapper dark_mode" : "specs--wrapper light_mode"
      }
    >
      <div className="home--nav">
        <Nav />
      </div>
      <div
        className={
          props.mode ? "specs--heading dark_mode" : "specs--heading light_mode"
        }
      >
        <div className="specs--heading_name">{props.project.title}</div>
      </div>
      <div
        className={
          props.mode
            ? "specs--title topline_d bottomline_d"
            : "specs--title topline_l bottomline_l"
        }
      >
        <p className="specs--title_text">PROJECT SPECIFICATIONS</p>
      </div>
      <div className="specs--details">
        <div className="specs--details_border">
          <div
            className={
              props.mode
                ? "specs--summary bottomline_d"
                : "specs--summary bottomline_l"
            }
          >
            <p className="specs--summary_p">{props.project.specs}</p>
          </div>
          <div
            className={
              props.mode ? "specs--info dark_mode" : "specs--info light_mode"
            }
          >
            <div
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              {" "}
              <div className="specs--date">
                <p className="specs--label">Date</p>
                <p>{props.project.date}</p>
              </div>
            </div>
            <div
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              <div className="specs--product">
                <p className="specs--label">Product</p>
                <p>{props.project.product}</p>
              </div>
            </div>
            <div
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              {" "}
              <div className="specs--client">
                <p className="specs--label">Client</p>
                <p>{props.project.client}</p>
              </div>
            </div>
            <div
              className={props.mode ? "bottomline_thin_d" : "bottomline_thin_l"}
            >
              {" "}
              <div className="specs--url">
                <p className="specs--label">View Website</p>

                <a href={props.project.url} className="specs--url_link">
                  <p>{props.project.title}</p>
                </a>
              </div>
            </div>

            <div className="specs--usedTechnologies">
              <p className="specs--label">Tech Stack</p>
              <p className="specs--usedTechnologies_p">
                {" "}
                {props.project.usedTechnologies}
              </p>
            </div>
            <div className="specs--back">
              <Link to="/projects" className="specs--back_link">
                <button className={props.mode ? "specs--btn_d" : "specs--btn"}>
                  {" "}
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(Specs);
