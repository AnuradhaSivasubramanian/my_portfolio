import React, { useState } from "react";
import { connect } from "react-redux";
import isProjectLatest from "../helpers/isProjectLatest";
import { leftArrow } from "../actions/leftArrow";
import { rightArrow } from "../actions/rightArrow";
import Right from "../images/rightarrow.svg";
import { Link } from "react-router-dom";
import "../stylesheets/Latest.scss";
function Latest(props) {
  const [leftClick, setleftClick] = useState(false);
  const [rightClick, setrightClick] = useState(false);
  let latest = isProjectLatest();

  return (
    <div
      className={
        props.mode ? "latest--wrapper dark_mode" : "latest--wrapper light_mode"
      }
    >
      <div className="latest--prev_next_wrapper ">
        <div
          className="latest--prev"
          onClick={() => {
            props.dispatch(leftArrow());
            setleftClick(true);

            setTimeout(() => {
              setleftClick(false);
              setrightClick(false);
            }, 1000);
          }}
        >
          Prev
        </div>
        <div
          className="latest--next"
          onClick={() => {
            props.dispatch(rightArrow());
            setrightClick(true);
            setTimeout(() => {
              setleftClick(false);
              setrightClick(false);
            }, 1000);
          }}
        >
          Next
        </div>
      </div>

      <div
        className={
          leftClick
            ? "latest--project leftclick"
            : rightClick
            ? "latest--project rightclick"
            : "latest--project"
        }
      >
        <div className="project--left">
          <div
            className={
              props.mode
                ? "project--index bottomline_thin_d"
                : "project--index bottomline_thin_l"
            }
          >
            0{props.index + 1}
          </div>
          <div
            className={
              props.mode
                ? "project--title bottomline_thin_d"
                : "project--title bottomline_thin_l"
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
                    ? "project--view dark_mode bottomline_thin_d"
                    : "project--view light_mode bottomline_thin_l"
                }
                onClick={() =>
                  props.dispatch({
                    type: "SELECT_PROJECT",
                    project: latest[props.index],
                  })
                }
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
              <a
                href={latest[props.index].url}
                className={
                  props.mode
                    ? "project--link a_dark "
                    : "project--link a_light "
                }
              >
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
        <div className="project--right">
          <img
            className="project--img"
            src={latest[props.index].image}
            alt="project"
          />
        </div>
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
