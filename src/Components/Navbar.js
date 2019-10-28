import React, { Component } from "react";
import logo from "../logo.png";
import { animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        </div>
      </nav>
    );
  }
}
