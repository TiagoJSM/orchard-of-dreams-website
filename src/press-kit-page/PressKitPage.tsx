import * as React from "react";

import "./PressKitPage.css";

const logo = require("../images/ordeal-logo2.png");
const logoDark = require("../images/ordeal-logo2 dark.png");
const icon = require("../images/icon300x300.png");

const img1 = require('../images/img1.jpg');
const img2 = require('../images/img2.jpg');
const img3 = require('../images/img3.jpg');
const img4 = require('../images/img4.jpg');
const img5 = require('../images/img5.jpg');
const img6 = require('../images/img6.jpg');
const img7 = require('../images/img7.jpg');
const img8 = require('../images/img8.jpg');
const img9 = require('../images/img9.jpg');

class FactSheet extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Factsheet</h1>

        <h3>Developer</h3>
        <p>Amber Fragment</p>

        <h3>Release Date</h3>
        <p>Coming soon...</p>

        <h3>Website</h3>
        <a href="www.orchardofdreams.com">www.orchardofdreams.com</a>

        <h3>Social Media</h3>
        <p>Facebook</p>
        <a href="https://www.facebook.com/Ordeal-Orchard-of-Dreams-268872300671308/">
          https://www.facebook.com/Ordeal-Orchard-of-Dreams-268872300671308/
        </a>
        <p>Twitter</p>
        <a href="https://twitter.com/OrdealOf">https://twitter.com/OrdealOf</a>

        <h3>Email</h3>
        <a href="mailto:tiagomartins@orchardofdreams.com" target="_top">
          tiagomartins@orchardofdreams.com
        </a>
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Description</h1>

        <p>Ordeal: Orchard of Dreams is a platformer where the player joins Elarcs in his quest.</p>
        <p>Elarcs is a Sandscale whose personal mission is to guard the desert and its inhabitants, but one day is not like the others, a simple mission to capture the King of Thieves becomes something way bigger than Elarcs could ever imagine!</p>
        <p>Travel through connected levels, avoid dangerous traps, fight deadly enemies and search the world for treasures and new weapons!</p>
      </div>
    );
  }
}

class Features extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Features</h1>

        <ul>
          <li>Connected levels</li>
          <li>Weapons to gather and build</li>
          <li>Treasures to find</li>
          <li>Variety of enemies and bosses</li>
        </ul>
      </div>
    );
  }
}

class LogoAndIcon extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Logos</h1>

        <img src={logo} />
        <img src={logoDark} />
        <img src={icon} />
      </div>
    );
  }
}

class Images extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Images</h1>

        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
      </div>
    );
  }
}

class Videos extends React.Component {
  render() {
    return (
      <div className="press-kit-section">
        <h1>Videos</h1>

        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/mRdQojVff5k"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

class PressKitPage extends React.Component {
  render() {
    return (
      <div className="container-fluid PressKit">
        <FactSheet />
        <Description />
        <Features />
        <LogoAndIcon />
        <Images />
        <Videos />
      </div>
    );
  }
}

export default PressKitPage;
