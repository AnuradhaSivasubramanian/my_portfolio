import React from "react";
import Nav from "./Nav";
import Latest from "../container/Latest";
import { connect } from "react-redux";
import "../stylesheets/Global.scss";
import "../stylesheets/Home.scss";
const title = "FULL STACK WEB DEVELOPER";
const random = " ULFTACEKBDVOPRWS ";

class Home extends React.Component {
  state = {
    finaltitle: ["A"],
    stepTime: 0,
    index: 0,
  };
  componentDidMount = () => {
    let newtitle = [...this.state.finaltitle];
    newtitle[this.state.index] = random[Math.floor(Math.random() * 17)];
    this.setState({ finaltitle: [...newtitle] });
    setTimeout(this.counter1, 400);
  };
  counter1 = () => {
    if (this.state.finaltitle[this.state.index] !== title[this.state.index]) {
      let newtitle = [...this.state.finaltitle];
      newtitle[this.state.index] = random[Math.floor(Math.random() * 17)];
      this.setState({ finaltitle: [...newtitle] });
      setTimeout(this.counter1, 3);
    } else if (this.state.finaltitle.join("") !== title) {
      if (title[this.state.index + 1] === " ") {
        this.setState({
          finaltitle: [...this.state.finaltitle, " "],
          index: this.state.index + 2,
        });
      } else {
        this.setState({
          finaltitle: [...this.state.finaltitle, "A"],
          index: this.state.index + 1,
        });
      }
      setTimeout(this.counter1, 3);
    }
  };
  counter2 = () => {
    let newtitle = [...this.state.finaltitle];
    newtitle[this.state.index] = String.fromCharCode(
      Math.floor(Math.random() * 25) + 66
    );
    this.setState({ finaltitle: [...newtitle] });
    // setTimeout(this.counter2, 400);
  };
  render() {
    return (
      <div className="home--wrapper">
        <div className="home--nav">
          <Nav />
        </div>

        <div
          className={
            this.props.mode
              ? "home--heading dark_mode"
              : "home--heading light_mode"
          }
        >
          <div className="home--heading_name">Anuradha</div>
          <div className="home--heading_name">Sivasubramanian</div>
        </div>
        <div
          className={
            this.props.mode
              ? "home--title topline_d bottomline_d dark_mode"
              : "home--title topline_l bottomline_l light_mode"
          }
        >
          <p className="home--title_text">{this.state.finaltitle}</p>
        </div>
        <div
          className={
            this.props.mode
              ? "home--desc dark_mode bottomline_d"
              : "home--desc light_mode bottomline_l"
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
}
const mapStateToProps = (state) => {
  return {
    mode: state.mode.dark,
  };
};

export default connect(mapStateToProps)(Home);
