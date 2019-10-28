import React, { Component } from "react";
import Film from "./Film";


class FilmList extends Component {
  render() {
    return (
      <div className="film-list">
        <Film name="Taxi Driver">1976</Film>
        <Film name="Apocalypse Now">1979</Film>

      </div>
    )
  };
}

export default FilmList;
