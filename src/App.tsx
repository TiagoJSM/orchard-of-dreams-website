import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./main-page/MainPage";
import PressKitPage from "./press-kit-page/PressKitPage";
import ScrollToTop from './scroll-to-top/ScrollToTop';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Route path="/" exact component={MainPage} />
            <Route path="/press/" component={PressKitPage} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
