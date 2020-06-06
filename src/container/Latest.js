import React from "react";
import { connect } from "react-redux";
import isProjectLatest from "../helpers/isProjectLatest";
import { leftArrow } from "../actions/leftArrow";
import { rightArrow } from "../actions/rightArrow";
import arrow from "../images/arrow.svg";
import Left from "../images/leftarrow.svg";
import Right from "../images/rightarrow.svg";
import { Link } from "react-router-dom";
import "../stylesheets/Latest.scss";
function Latest(props) {
  let latest = isProjectLatest();
  return (
    <div className="latest--wrapper">
      <div
        className="latest--arrow"
        onClick={() => props.dispatch(leftArrow())}
      >
        <img className="arrowicon" src={Left} alt="lefticon" />
      </div>
      <div
        className="latest--project"
        style={{ background: `${latest[props.index].left}` }}
      >
        <div className="project--left">
          <div className="project--index bottomline">0{props.index + 1}</div>
          <div className="project--title bottomline">
            <div className="project--title_text">
              {latest[props.index].title}
            </div>
          </div>
          <div className="project--links ">
            <div>
              <Link
                to="/specs"
                className="project--view bottomline"
                onClick={() =>
                  props.dispatch({
                    type: "SELECT_PROJECT",
                    project: latest[props.index],
                  })
                }
              >
                <p>View case</p>
                <img className="arrow--image" src={arrow} alt="linkarrow" />
              </Link>
            </div>

            <div>
              <a href={latest[props.index].url} className="project--link">
                <p>View website</p>
                <img className="arrow--image" src={arrow} alt="linkarrow" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="project--right"
          style={{ background: `${latest[props.index].right}` }}
        >
          <img
            className="project--img"
            src={latest[props.index].image}
            alt="project"
          />
        </div>
      </div>
      <div
        className="latest--arrow"
        onClick={() => props.dispatch(rightArrow())}
      >
        <img className="arrowicon" src={Right} alt="lefticon" />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    index: state.slider.index,
  };
};

export default connect(mapStateToProps)(Latest);
