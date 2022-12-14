import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import flag from "../assets/images/senegalFlag.jpeg";
import ovrLogo from "../assets/images/ovrLogo.png";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="d-flex navbar navbar-expand-lg">
        <div className="navContainer">
          <div className="d-flex navbar-nav" id="navbarLinks">
                <a className="nav-item nav-link hover-underline-animation"
                  href="/history">History
                </a>
                
                <a className="nav-item nav-link hover-underline-animation"
                  href="/aboutus"> About Us
                </a>      
         </div>

          <div className="logoContainer">
              <a className="logoLink" href="/"> <img className="ovrLogo" src={ovrLogo} alt="companyLogo"  /></a>
          </div>

          <div className="senegalContainer">
            <div className="ndoukContainer">
                <h1 id="ndouc">Ndoukouman Ndiaye, Senegal</h1>
            </div>

            <div className="flagContainer">
                <img className="senegalFlag" src={flag} />
            </div>
          </div>

          <div className="donateContainer">
            <button id="donateBtn">
              <a className="nav-item nav-link" id="donateLink" href="/donate">
                Donate
              </a>
            </button>
          </div>
        </div>
      </Nav>
    );
  }
}
