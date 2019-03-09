import * as React from "react";

import "./Banner.css";

const logo = require("../images/ordeal-logo2 dark.png");

class Banner extends React.Component {
  render() {
    return (
      <div className="BannerContainer" style={{backgroundImage: `background`}}>
        <div className="Banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`}}/>
        <img src={logo} />
      </div>
    );
  }
}

export default Banner;
