import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "./Avatar";
import Typist from "react-typist";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Avatar />
            <div className="banner-text">
              <h1>Pravash Kumar Behera</h1>
              <hr />
              <h4>
                <Typist
                  style={{
                    show: true,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1000
                  }}>
                  <span> Full Stack Web Developer </span>
                  <Typist.Backspace count={15} delay={2000} />
                  <span> App Developer </span>
                </Typist>
              </h4>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
