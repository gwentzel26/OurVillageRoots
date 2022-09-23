import React, {Component} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Navbar.css';

export default class Navbar extends Component {

    render(){
        return(
          <nav className="d-flex navbar navbar-expand-lg bg-light ">
            <div className="d-flex ">
                  <a className="navbar-brand" href="#">Our Village Roots</a>
            </div>
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              <div className="d-flex collapse navbar-collapse ml-auto flex-row-reverse" id="navbarNavAltMarkup">
                  <div className="d-flex navbar-nav ml-auto flex-row">
                      <a className="nav-item nav-link active" href="#"> <span className="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="#">History</a>
                      <a className="nav-item nav-link" href="#">Vision</a>
                      <a className="nav-item nav-link" href="#">About Us</a>
                      <a className="nav-item nav-link" href="#">Contact</a>
                      <a className="nav-item nav-link" href="#">Donation</a>
                  </div>
              </div>
        </nav>
 
        )
    }
}