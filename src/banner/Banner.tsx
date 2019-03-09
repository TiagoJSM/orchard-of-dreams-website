import * as React from "react";

import "./Banner.css";

const logo = require("../images/ordeal-logo2 dark.png");

class Banner extends React.Component {
  render() {
    return (
      <div className="BannerContainer">
        <div className="Banner" />
        <img src={logo} />
      </div>
    );
  }
}

export default Banner;
