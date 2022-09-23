import React, {Component} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Navbar.css';

export default class Navbar extends Component {

    render(){
        return(
          <nav className="d-flex navbar navbar-expand-lg bg-light ">
            <div className="d-flex ">
                  <a className="navbar-brand" href="/">Our Village Roots</a>
            </div>
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              <div className="d-flex collapse navbar-collapse ml-auto flex-row-reverse" id="navbarNavAltMarkup">
                  <div className="d-flex navbar-nav ml-auto flex-row">
                      <a className="nav-item nav-link" href="/history">History</a>
                      <a className="nav-item nav-link" href="/vision">Vision</a>
                      <a className="nav-item nav-link" href="/aboutus">About Us</a>
                      <a className="nav-item nav-link" href="/contact">Contact</a>
                      <a className="nav-item nav-link" href="/donate">Donation</a>
                  </div>
              </div>
        </nav>
 
        )
    }
}