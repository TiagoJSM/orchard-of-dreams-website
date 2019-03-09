import * as React from "react";
import { Link } from "react-router-dom";

import "./HeaderBar.css";

type LinkProps = {
  to: string;
  label: string;
};
type HeaderBarProps = {
  menuItems: LinkProps[];
};

class HeaderBar extends React.Component<HeaderBarProps> {
  render() {
    const menuItems = this.props.menuItems;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top HeaderBar">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {menuItems.map((menuItem, idx) => {
                return (
                  <li key={idx} className="nav-item active">
                    <Link className="nav-link" to={`${menuItem.to}`}>
                      {menuItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;
