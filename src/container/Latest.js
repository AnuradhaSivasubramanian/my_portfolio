import React, { useState } from "react";
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
  const [leftClick, setleftClick] = useState(false);
  const [rightClick, setrightClick] = useState(false);
  let latest = isProjectLatest();

  return (
    <div className="latest--wrapper">
      <div
        className={
          props.mode ? "latest--arrow dark_mode" : "latest--arrow light_mode"
        }
        onClick={() => {
          props.dispatch(leftArrow());
          setleftClick(true);

          setTimeout(() => {
            setleftClick(false);
            setrightClick(false);
          }, 1000);
        }}
      >
        <img
          className={props.mode ? "arrowicon_d" : "arrowicon"}
          src={Left}
          alt="lefticon"
        />
      </div>
      <div
        className={
          leftClick
            ? "latest--project leftclick"
            : rightClick
            ? "latest--project rightclick"
            : "latest--project"
        }
        style={
          props.mode
            ? { background: `${latest[props.index].left_dark}` }
            : { background: `${latest[props.index].left_light}` }
        }
      >
        <div className="project--left">
          <div
            className={
              props.mode
                ? "project--index bottomline_d"
                : "project--index bottomline_l"
            }
          >
            0{props.index + 1}
          </div>
          <div
            className={
              props.mode
                ? "project--title bottomline_d"
                : "project--title bottomline_l"
            }
          >
            <div className="project--title_text">
              {latest[props.index].title}
            </div>
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
          style={
            props.mode
              ? { background: `${latest[props.index].right_dark}` }
              : { background: `${latest[props.index].right_light}` }
          }
        >
          <img
            className="project--img"
            src={latest[props.index].image}
            alt="project"
          />
        </div>
      </div>
      <div
        className={
          props.mode ? "latest--arrow dark_mode" : "latest--arrow light_mode"
        }
        onClick={() => {
          props.dispatch(rightArrow());
          setrightClick(true);
          setTimeout(() => {
            setleftClick(false);
            setrightClick(false);
          }, 1000);
        }}
      >
        <img
          className={props.mode ? "arrowicon_d" : "arrowicon"}
          src={Right}
          alt="lefticon"
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    index: state.slider.index,
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(Latest);
