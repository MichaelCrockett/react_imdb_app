import React, { Component } from "react";
import '../App.css';

class Film extends Component {
  render() {
    return (
      <div className="film">
      <div className="film">
      <a href={this.props.url} target="blank">{this.props.children}</a>
      </div>
      </div>
    );
  }
}

export default Film;
