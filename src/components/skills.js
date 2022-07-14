import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default class ProgressBarr extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{ marginBottom: 0 }}>Java</h4>

        <ProgressBar
          percent={75}
          transition="true"
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        />

        <br />
        <h4 style={{ marginBottom: 0 }}>Java</h4>
        <ProgressBar
          percent={75}
          transitionDuration={300}
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        />
        <br />
      </div>
    );
  }
}
