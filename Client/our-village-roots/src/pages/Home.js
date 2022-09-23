import { renderMatches } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import {
    Jumbotron,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
  } from "react-bootstrap";
  import Navbar from "../components/Navbar";




const Home = () => {


    return(
        <>
            <header>
                <Navbar />
            </header>
      
        <h2>
              Serving Mama Africa… One Village At A Time
        </h2>
        <h3>Ndoucouman, Sengegal</h3>
      
        </>


        )

}

export default Home;