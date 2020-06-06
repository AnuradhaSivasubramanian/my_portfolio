import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../stylesheets/Specs.scss";

export function Specs(props) {
  return (
    <div className="specs--wrapper">
      <div className="home--nav">
        <Nav />
      </div>
      <div className="specs--heading">
        <div className="specs--heading_name">{props.project.title}</div>
      </div>
      <div className="specs--title topline bottomline">
        <p className="specs--title_text">PROJECT SPECIFICATIONS</p>
      </div>
      <div className="specs--details">
        <div className="specs--details_border">
          <div className="specs--summary bottomline">
            <p className="specs--summary_p">{props.project.specs}</p>
          </div>
          <div
            className="specs--info"
            style={{ background: `${props.project.left}` }}
          >
            {" "}
            <div className="specs--left">
              <div className="specs--date">
                <p className="specs--label">Date</p>
                <p>{props.project.date}</p>
              </div>
              <div className="specs--product">
                <p className="specs--label">Product</p>
                <p>{props.project.product}</p>
              </div>
              <div className="specs--client">
                <p className="specs--label">Client</p>
                <p>{props.project.client}</p>
              </div>
              <div className="specs--url">
                <p className="specs--label">View Website</p>

                <a href={props.project.url} className="specs--url_link">
                  <p>{props.project.title}</p>
                </a>
              </div>
            </div>
            <div className="specs--right">
              <div className="specs--usedTechnologies">
                <p className="specs--label">Used Technologies</p>
                <p> {props.project.usedTechnologies}</p>
              </div>

              <div className="specs--back">
                <Link to="/projects" className="specs--back_link">
                  <button className="specs--btn"> Back</button>
                </Link>
              </div>
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
  };
};

export default connect(mapStateToProps)(Specs);
