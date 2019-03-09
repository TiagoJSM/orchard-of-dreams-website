import * as React from "react";

import GameDescription from "../game-description/GameDescription";
import Divider from "../divider/Divider";
import Trailer from "../trailer/Trailer";
import GameImages from "../game-images/GameImages";
import Social from "../social/Social";

import Banner from "../banner/Banner";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="container-fluid">
          <GameDescription />
          <Divider />
          <Trailer />
          <Divider />
          <GameImages />
          <Divider />
          <Social />
          <Divider />
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
