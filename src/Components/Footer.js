import React, { Component } from "react";
import logo from "../logo-white.png";
import { animateScroll as scroll } from "react-scroll";


export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
        <div className="footer" id="section5">
        <img className="footer-logo"
            src={logo}
            alt="Logo"
            onClick={this.scrollToTop}/>
            <p><a style={{textDecoration:"none", color:"#fff"}} href="https://anterin.id">Copyright © 2017 Anterin. All rights reserved.</a></p>
        </div>
    );
  }
}
