import React from "react";
import Nav from "./Nav";
import Latest from "../container/Latest";
import { connect } from "react-redux";
import "../stylesheets/Global.scss";
import "../stylesheets/Home.scss";

export function Home(props) {
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
        <p className="home--title_text">FULL STACK WEB DEVELOPER</p>
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
