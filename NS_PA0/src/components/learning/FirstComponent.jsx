import React, {Component} from "react";

export default class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
          <h1>FC</h1>
        </div>
      );
    }
  }

  export class SecondComponent extends Component {
    render() {
      return (
        <div className="secondComponent">
          <h1>SC</h1>
        </div>
      );
    }
  }