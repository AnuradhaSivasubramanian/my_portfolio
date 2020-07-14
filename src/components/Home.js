import React, { useEffect, useReducer, useRef } from "react";
import Nav from "./Nav";
import Latest from "../container/Latest";
import { connect } from "react-redux";
import "../stylesheets/Global.scss";
import "../stylesheets/Home.scss";

const title = "F";
const random = " ULFTA";

const initialState = {
  finaltitle: ["A"],
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADDCHAR":
      return { ...state, finaltitle: [...action.payload.title] };
    case "ADDA":
      return { ...state, finaltitle: [...state.finaltitle, "A"] };
    case "ADDSPACE":
      return { ...state, finaltitle: [...state.finaltitle, " "] };
    case "INCREASEBY1":
      return { ...state, index: state.index + 1 };
    case "INCREASEBY2":
      return { ...state, index: state.index + 2 };
    default:
      throw new Error();
  }
}

export function Home(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef(state);
  ref.current = state;

  useEffect(() => {
    let newtitle = [...state.finaltitle];
    newtitle[state.index] = random[Math.floor(Math.random() * 17)];
    dispatch({ type: "ADDCHAR", payload: { title: [...newtitle] } });
    console.log("ref" + ref.current.finaltitle);
    counter1();
  }, [state]);

  const counter1 = () => {
    console.log("refinside " + ref.current.finaltitle);
  };
  return (
    <div className="home--wrapper">
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
            ? "home--title topline_d bottomline_d dark_mode"
            : "home--title topline_l bottomline_l light_mode"
        }
      >
        <p className="home--title_text">
          {state.finaltitle}+{state.index}
        </p>
      </div>
      <div
        className={
          props.mode ? "home--desc dark_mode" : "home--desc light_mode"
        }
      >
        <div className="home--desc_summary">
          I am an aspiring self motivated full stack web developer with a
          passion for responsive design and learning new skills.
        </div>
      </div>
      <div className="home--latestprojects">
        <div className="home--project_content">
          <Latest />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(Home);
