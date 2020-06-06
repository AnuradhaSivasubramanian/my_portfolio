import React from "react";
import Nav from "./Nav";
import Latest from "../container/Latest";
import "../stylesheets/Global.scss";
import "../stylesheets/Home.scss";

export default function Home() {
  return (
    <div className="home--wrapper">
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
      <div className="home--desc">
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
