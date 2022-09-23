import React, {Component} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Navbar extends Component {

    render(){
        return(
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Our Village Roots</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#"> <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">History</a>
              <a class="nav-item nav-link" href="#">Vision</a>
              <a class="nav-item nav-link" href="#">About Us</a>
              <a class="nav-item nav-link" href="#">Contact</a>
              <a class="nav-item nav-link" href="#">Donation</a>
            </div>
          </div>
        </nav>
 
        )
    }
}