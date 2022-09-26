import React, {Component} from "react";
import { Link } from "react-router-dom";
import {
    Nav,
    NavItem,
    Glyphicon,
    Container,
    Modal,
    Tab,
  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Navbar.css';
import brooms from "../assets/images/Brooms.jpg"

export default class Navbar extends Component {

    render(){
        return(
          <Nav className="d-flex navbar navbar-expand-lg">
            <div className="d-flex ">
                  <a className="navbar-brand" href="/">Our Village Roots</a>
            </div>
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              <div className="d-flex collapse navbar-collapse" id="navbarLinks">
                  <div className="d-flex navbar-nav">
                      <a className="nav-item nav-link" href="/history">History</a>
                      <a className="nav-item nav-link" href="/vision">Vision</a>
                      <a className="nav-item nav-link" href="/aboutus">About Us</a>
                      <a className="nav-item nav-link" href="/contact">Contact</a>  
                  </div>   
              </div>
              <button id="donateBtn">
                        <a className="nav-item nav-link" href="/donate">Donate</a>
              </button>
        </Nav>
 
        )
    }
}